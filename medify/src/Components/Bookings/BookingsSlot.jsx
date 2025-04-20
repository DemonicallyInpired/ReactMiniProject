import { useMemo } from "react";
import SwiperContainer from "../Carousels/SwiperContainer";
import {
  Box,
  Stack,
  Typography,
  Button,
  Divider,
  TextField,
} from "@mui/material";
import { SwiperSlide } from "swiper/react";
import { green } from "@mui/material/colors";
import "./Bookings.css";
import { useState } from "react";
import ReactModal from "react-modal";
import { Form, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
const getTabsForWeek = () => {
  const slotMapping = {
    Morning: ["11:30 AM"],
    Afternoon: ["12:00 PM", "12:30 PM", "1:30 PM", "2:30 PM"],
    Evening: ["6:00 PM", "6:30 PM", "7:00 PM"],
  };
  const hm = new Map();
  const currDate = new Date();
  for (let i = 0; i < 7; i++) {
    const nextDayIter =
      currDate.setHours(0, 0, 0, 0).valueOf() + i * 24 * 3600 * 1e3;
    hm.set(
      nextDayIter,
      Intl.DateTimeFormat("en-IN", {
        month: "short",
        day: "numeric",
        weekday: "short",
      }).format(nextDayIter)
    );
  }
  return [hm, slotMapping];
};
ReactModal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-5%",
    transform: "translate(-50%, -50%)",
    zIndex: 1300,
    minWidth: "70vw",
  },
};

export default function BookingSlots({ details, isvisible }) {
  const slots = useMemo(() => getTabsForWeek(), []);
  const [activeIndex, setActiveActiveIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [bookingTime, setBookingTime] = useState({ day: "", time: "" });
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleOpen = (event, time) => {
    setBookingTime((prevState) => {
      return { ...prevState, time: time };
    });
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      if (bookingTime.day.length === 0 || bookingTime.time.length === 0) {
        enqueueSnackbar({
          message: "please provide both time and day",
          variant: "error",
        });
        return;
      }
      const data = {
        "Hospital Name": details["Hospital Name"],
        City: details["City"],
        State: details["State"],
        "Hospital Type": details["Hospital Type"],
        "Hospital overall rating": details["Hospital overall rating"],
        ...bookingTime,
      };
      if (localStorage.getItem("bookings")) {
        const val = JSON.parse(localStorage.getItem("bookings"));
        localStorage.setItem("bookings", JSON.stringify([...val, data]));
      } else {
        localStorage.setItem("bookings", JSON.stringify([data]));
      }
      setOpenModal(false);
      enqueueSnackbar({ message: "Booking Sucessful", variant: "success" });

      navigate("/my-bookings");
    } catch (err) {
      console.error(err);
      enqueueSnackbar({ message: "something went wrong", variant: "error" });
    }
  };

  const handleActive = (event, index, value) => {
    if (index !== activeIndex) {
      setActiveActiveIndex(index);
    }
    setBookingTime((prevTime) => {
      return { ...prevTime, day: value };
    });
  };

  return isvisible ? (
    <Box>
      <SwiperContainer pagination={false} navigation={true}>
        {[...slots[0].values()].map((item, index) => {
          return (
            <SwiperSlide
              className="booking__carousel__slide"
              key={`slot-content-${index}`}
            >
              <Stack
                sx={{
                  borderBottom: `4px solid ${
                    index === activeIndex ? "#2AA7FF" : "#233"
                  }`,
                  cursor: "pointer",
                  padding: "1rem",
                }}
                alignItems="center"
                direction="column"
                onClick={(event) => handleActive(event, index, item)}
                className="slider-stack"
              >
                <Typography variant="h6">
                  {index === 0 ? "Today" : index === 1 ? "Tommorow" : item}
                </Typography>
                <Typography
                  variant="body2"
                  color={green["800"]}
                >{`10 Slots Available`}</Typography>
              </Stack>
            </SwiperSlide>
          );
        })}
      </SwiperContainer>
      <Stack sx={{ padding: "1rem" }} gap="1rem" direction="column">
        {Object.entries(slots[1]).map(([key, value]) => {
          return (
            <>
              <Stack
                direction={{ md: "row", xs: "column" }}
                gap="1rem"
                justifyContent="space-between"
                alignItems={{ xs: "center", md: "flex-start" }}
              >
                <Typography component="p" variant="body2" fontWeight="bold">
                  {key}
                </Typography>
                <Stack
                  justifyContent={{ xs: "center" }}
                  direction="row"
                  gap="1rem"
                  flexWrap="wrap"
                >
                  {value.map((item) => {
                    return (
                      <Button
                        sx={{
                          maxWidth: "fit-content",
                        }}
                        variant="outlined"
                        size="small"
                        color="green"
                        onClick={(event) => handleOpen(event, item)}
                      >
                        {item}
                      </Button>
                    );
                  })}
                </Stack>
              </Stack>
              <Divider variant="fullWidth" />
            </>
          );
        })}
      </Stack>
      <ReactModal
        isOpen={openModal}
        shouldCloseOnEsc={true}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="booking-modals"
      >
        <Form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography variant="h3">Confirm Booking</Typography>
              <Typography variant="body2" component="span">
                Please enter your email to confirm booking for{" "}
                <Typography component="span" variant="body2" fontWeight="bold">
                  {bookingTime.day} on {bookingTime.time}
                </Typography>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                gap: "2rem",
                marginTop: "1rem",
              }}
            >
              <TextField
                name="email"
                label="Enter your email"
                slotProps={{ id: "email" }}
                variant="outlined"
                type="email"
                required
              />
              <Button variant="contained" type="submit">
                Confirm
              </Button>
              <Button
                variant="outlined"
                color="primary"
                type="button"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Form>
      </ReactModal>
    </Box>
  ) : null;
}
