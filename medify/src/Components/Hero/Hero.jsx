import { Grid, Typography, Stack, Button } from "@mui/material";
import Search from "../Search/Search.jsx";
import AlternateBox from "../AlternateBox/AlternateBox";
import { Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
export default function Hero() {
  return (
    <AlternateBox sx={{ paddingBottom: "1rem" }}>
      <Grid
        sx={{
          maxWidth: "80vw",
          margin: "auto",
          position: "relative",
        }}
        container
      >
        <Grid size={{ xs: 12, lg: 7.2 }}>
          <Stack
            height="100%"
            justifyContent="flex-start"
            direction="column"
            marginTop={"4rem"}
            gap={2}
          >
            <Typography variant="h3">Skip the travel! Find Online</Typography>
            <Typography variant="h1">
              Medical{" "}
              <Typography variant="h2" color="primary" component="span">
                Center
              </Typography>
            </Typography>
            <Typography variant="body1">
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </Typography>
            <Button sx={{ width: "fit-content" }} variant="contained">
              <MuiLink
                color="#fff"
                underline="none"
                component={RouterLink}
                to="/search"
              >
                Find Center
              </MuiLink>
            </Button>
          </Stack>
        </Grid>
        <Grid
          sx={{ height: { xs: "50vh", lg: "65vh" } }}
          size={{ sm: 12, lg: 4.8 }}
        >
          <img
            width="100%"
            height={"90%"}
            src="/assets/hero_image.png"
            style={{ objectFit: "contain" }}
            alt="header_image"
          />
        </Grid>
        <Grid sx={{ minHeight: "fit-content" }} size={{ sm: 12, lg: 4.8 }}>
          <Search />
        </Grid>
      </Grid>
    </AlternateBox>
  );
}
