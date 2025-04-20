import { useState } from "react";
import { Grid, Box, Stack, Typography, Button } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import BookingSlots from "../Bookings/BookingsSlot";
export default function HospitalDetailCard({ details, isBooking }) {
  const [tabsVisible, setTabsVisible] = useState(false);
  const handleOpenTabs = () => {
    setTabsVisible((prevState) => !prevState);
  };

  return (
    <Grid
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 0px 5px #222",
        padding: "2rem 0rem",
        Width: "100%",
        margin: "4rem",
        textAlign: { xs: "center", md: "left" },
      }}
      size={{ xs: 12, md: 11 }}
      overflow={"clip"}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "0.5rem",
          margin: "auto",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          width={"100%"}
        >
          <img src="/assets/hospitalicon.png" alt="hospital-logo-image" />
          <Stack
            sx={{
              padding: "1rem",
            }}
            direction="column"
            gap="0.5rem"
            flex="auto"
            flexWrap="wrap"
          >
            <Typography variant="h3" color="primary.main">
              {details["Hospital Name"]}
            </Typography>
            <Typography fontWeight="bold" variant="body2" component="span">
              {details["City"]}, {details["State"]}
            </Typography>
            <Typography variant="body2">{details["Hospital Type"]}</Typography>
            <Typography
              fontWeight="bold"
              component="span"
              color={lightGreen["A700"]}
              variant="body2"
            >
              Free{" "}
              <Typography
                component="span"
                sx={{ textDecoration: "line-through" }}
                color="#222"
                fontWeight="light"
                marginLeft="0.5em"
              >
                &#8377;500
              </Typography>
              <Typography
                fontWeight="light"
                color="#222"
                variant="span"
                marginLeft="0.25em"
              >
                Consultation fee at clinic
              </Typography>
            </Typography>
          </Stack>
          {isBooking ? (
            <Grid size={{ xs: 12, md: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  minWidth: "20%",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <Button
                  type="button"
                  variant="outlined"
                  size="small"
                  color="green"
                  sx={{ textTransform: "capitalize" }}
                >
                  {details["time"]}
                </Button>
                <Button
                  type="button"
                  variant="outlined"
                  size="small"
                  sx={{ textTransform: "capitalize" }}
                >
                  {details["day"]}
                </Button>
              </Box>
            </Grid>
          ) : null}
        </Stack>

        <Stack
          alignItems={{ xs: "flex-start", md: "flex-end" }}
          direction={{ xs: "column", md: "row" }}
          gap={"1rem"}
          sx={{ padding: "1rem", boxSizing: "border-box" }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "0.5rem",
              height: "24px",
              padding: "0.5rem",
              backgroundColor: lightGreen["900"],
              borderRadius: "10px",
            }}
          >
            <img src="/assets/thumbsup.png" alt="like-icon" />
            <Typography variant="body2" color="white">
              {details["Hospital overall rating"]}
            </Typography>
          </Box>
          {!isBooking ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                justifyContent: "flex-end",
                minWidth: { xs: "100%", md: "fit-content" },
              }}
            >
              <Typography
                variant="body2"
                fontWeight="400"
                color={lightGreen[500]}
              >
                Available Today
              </Typography>

              <Button
                variant="contained"
                sx={{
                  width: { xs: "100%", md: "fit-content" },
                }}
                onClick={handleOpenTabs}
              >
                Book FREE Center Visit
              </Button>
            </Box>
          ) : null}
        </Stack>
      </Box>
      {!isBooking ? (
        <Grid
          sx={{ margin: "auto" }}
          className="bookingSlots"
          size={{ xs: 12 }}
        >
          <BookingSlots details={details} isvisible={tabsVisible} />
        </Grid>
      ) : null}
    </Grid>
  );
}
