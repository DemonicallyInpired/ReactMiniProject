import { Box, Paper, Typography } from "@mui/material";
import getResponse from "../AskForm/getResponse";
export default function HelperCard({ question, setData, setcurrentData }) {
  const handleClick = () => {
    const currData = getResponse(question);
    setData((prevData) => [...currData, ...prevData]);
    setcurrentData((prevData) => [...currData, prevData]);
  };
  return (
    <Paper elevation={10}>
      <Box
        onClick={handleClick}
        component="button"
        sx={{ padding: "1rem", width: "100%", cursor: "pointer" }}
      >
        <Typography variant="h6">{question}</Typography>
        <Typography
          variant="body2"
          fontWeight="100"
          color="primary.contrastText"
        >
          Get immediate AI generated response
        </Typography>
      </Box>
    </Paper>
  );
}
