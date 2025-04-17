import { Box, Typography } from "@mui/material";

export default function Message() {
  return (
    <Box>
      <Typography
        color="primary.contrastText"
        variant="body1"
        sx={{ backgroundColor: "primary.main", boxSizing: "border-box" }}
        textAlign="center"
        padding="0.5rem"
      >
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </Typography>
    </Box>
  );
}
