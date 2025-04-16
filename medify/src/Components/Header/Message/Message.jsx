import { Box, Typography } from "@mui/material";
export default function Message() {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "0.5rem",
        boxSizing: "border-box",
        backgroundColor: "primary.main",
        width: "100vw",
      }}
    >
      <Typography variant="h6" color="white">
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </Typography>
    </Box>
  );
}
