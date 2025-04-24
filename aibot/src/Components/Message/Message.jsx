import { Paper, Box, Avatar, Typography, Button, Rating } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { useState } from "react";
import Modal from "react-modal";
import { Form } from "react-router-dom";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CloseIcon from "@mui/icons-material/Close";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    zIndex: "1200",
  },
};
Modal.setAppElement("#root");

export default function Message({ setData, setcurrentdata, data }) {
  const [show, setShow] = useState(false);
  const [modalOpen, setmodalOpen] = useState(false);
  const [feedback, setFeedBack] = useState("");
  const [ratings, setRatings] = useState(0);
  const [showRatings, setShowRatings] = useState(false);

  const handleShowLikes = () => {
    setShow(true);
  };
  const handleHideLikes = () => {
    setShow(false);
  };
  const handleModalClose = () => {
    setFeedBack("");
    setmodalOpen(false);
  };

  const addRating = (event, type) => {
    switch (type) {
      case "show": {
        setShowRatings((prevState) => !prevState);
        break;
      }
      case "add": {
        setRatings(event.target.value);
        setmodalOpen(true);

        break;
      }
    }
  };
  const handleModalSubmit = () => {
    setData((prevData) => {
      const newData = [...prevData].map((item) => {
        if (item.id === data.id) {
          return { ...item, ratings: ratings, feedback: feedback };
        } else {
          return item;
        }
      });
      return newData;
    });
    setcurrentdata((prevData) => {
      const newData = [...prevData].map((item) => {
        if (item.id === data.id) {
          return { ...item, ratings: ratings, feedback: feedback };
        } else {
          return item;
        }
      });
      return newData;
    });
    setmodalOpen(false);
  };
  const handleFeedBack = (event) => {
    setFeedBack(event.target.value);
  };
  return (
    <>
      <Paper
        elevation={10}
        sx={{
          display: "flex",
          bgcolor: "inherit",
          alignItems: "center",
          marginBottom: "1rem",
          padding: "0.5rem",
          gap: "0.5rem",
          cursor: "pointer",
        }}
        onMouseEnter={data.ratings ? null : handleShowLikes}
        onMouseLeave={data.ratings ? null : handleHideLikes}
      >
        <Box sx={{ padding: "1rem" }}>
          <Avatar
            src={
              data.type === "AI"
                ? "/assets/SoulAiProfile.png"
                : "/assets/Human.png"
            }
            alt={`${data.type}-profile`}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Typography component="span" fontWeight="bold">
            {data.type === "AI" ? "Soul AI" : "You"}
          </Typography>
          <Typography variant="body1">
            {data.type === "AI" ? data.response : data.question}
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Typography fontWeight={100} variant="span">
              {data.timeStamp}
            </Typography>
            {data.type === "AI" && (
              <Box sx={{ display: show ? "block" : "none" }}>
                <ThumbUpIcon
                  onClick={(event) => addRating(event, "show")}
                  sx={{ cursor: "pointer" }}
                />
                <ThumbDownAltIcon
                  onClick={(event) => addRating(event, "show")}
                  sx={{ cursor: "pointer" }}
                />
              </Box>
            )}
            {data.type === "AI" && (
              <Box>
                <Rating
                  name="feedback-rating"
                  defaultValue={0}
                  precision={0.5}
                  sx={{ display: showRatings ? "flex" : "none" }}
                  onChange={(event) => addRating(event, "add")}
                  disabled={data.ratings !== undefined}
                />
              </Box>
            )}
          </Box>
        </Box>
      </Paper>
      <Modal
        isOpen={modalOpen}
        style={customStyles}
        onRequestClose={handleModalClose}
        shouldCloseOnEsc={true}
      >
        <Form onSubmit={handleModalSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "60vw",
                justifyContent: "space-between",
              }}
            >
              <LightbulbIcon />
              <CloseIcon onClick={handleModalClose} />
            </Box>
            <Box>
              <Typography
                component="textarea"
                rows={10}
                width={"100%"}
                value={feedback}
                onChange={handleFeedBack}
                sx={{ textTransform: "none", outline: "none" }}
                required
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <Button type="submit">Submit</Button>
            </Box>
          </Box>
        </Form>
      </Modal>
    </>
  );
}
