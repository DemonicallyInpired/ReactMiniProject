import { Form } from "react-router-dom";
import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  TextField,
  useMediaQuery,
} from "@mui/material";
import getResponse from "./getResponse";
export default function AskForm({ setData, currentData, setcurrentData }) {
  const isSmall = useMediaQuery("(max-width : 600px)");
  const [question, setQuestion] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const res = getResponse(question);

    setData((prevData) => {
      return [...prevData, ...res];
    });
    setQuestion(() => "");
    setcurrentData((prevData) => {
      return [...prevData, ...res];
    });
  };
  const handleSyncLocalStorage = (event) => {
    event.preventDefault();
    const currData = localStorage.getItem("conversations");
    if (Object.is(currData, null) && currentData.length > 0) {
      localStorage.setItem("conversations", JSON.stringify(currentData));
    } else if (currentData.length > 0 && !Object.is(currData, null)) {
      localStorage.setItem(
        "conversations",
        JSON.stringify([...JSON.parse(currData), ...currentData])
      );
      setcurrentData(() => []);
      setQuestion(() => "");
    }
  };
  const handleChange = (event) => {
    setQuestion(event.target.value);
  };
  return (
    <Form
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        flexDirection: isSmall ? "column" : "row",
        marginTop: "1rem",
        width: "100vw",
      }}
      onSubmit={handleFormSubmit}
    >
      <FormControl
        sx={{
          width: { xs: "100%", sm: "80%" },
        }}
      >
        <TextField
          variant="filled"
          name="bot-search"
          inputProps={{ id: "bot-search" }}
          placeholder="Message Bot AI..."
          onChange={handleChange}
          value={question}
          required
        />
      </FormControl>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          padding: { xs: "1rem", md: "0rem" },
        }}
      >
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="large"
        >
          Ask
        </Button>
        <Button
          type="button"
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleSyncLocalStorage}
        >
          Save
        </Button>
      </Box>
    </Form>
  );
}
