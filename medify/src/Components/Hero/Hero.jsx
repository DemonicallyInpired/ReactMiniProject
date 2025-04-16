import { AlternateBox } from "../Styled";
import { Box, Button, Grid, Typography } from "@mui/material";
import Suggestions from "./Suggestions/Suggestions";
export default function Hero() {
  return (
    <AlternateBox
      sx={{ padding: "1rem", position: "relative", marginTop: "10vh" }}
    >
      <Grid
        spacing={4}
        sx={{
          minHeight: { xs: "30vh", md: "70vh" },
          maxWidth: "80vw",
          margin: "4rem auto",
        }}
        container
      >
        <Grid size={{ xs: 12, md: 7.2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              height: "100%",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              gap: "1rem",
            }}
          >
            <Typography variant="h5">Skip the travel! Find Online</Typography>
            <Typography variant="h4">
              <span>Medical</span>{" "}
              <Typography
                color="primary"
                sx={{ display: "inline-block" }}
                variant="inherit"
              >
                Center
              </Typography>
            </Typography>
            <Typography variant="body1">
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </Typography>
            <Button disabled sx={{ width: "fit-content" }} size="large">
              Find Course
            </Button>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 12 - 7.2 }}>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <img
              style={{ width: "90%", height: "50vh" }}
              src="/assets/hero.png"
              alt="header_image"
            />
          </Box>
        </Grid>
      </Grid>
      <Suggestions />
    </AlternateBox>
  );
}
