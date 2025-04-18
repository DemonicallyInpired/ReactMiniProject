import { Grid, Typography, Box, useMediaQuery } from "@mui/material";
import AlternateBox from "../AlternateBox/AlternateBox";

export default function Statistics() {
  const smallerScreens = useMediaQuery("(max-width : 600px)");
  return (
    <AlternateBox>
      <Grid sx={{ padding: "2rem" }} container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <Typography fontWeight="bold" color="primary" variant="body1">
              ARING FOR THE HEALTH OF YOU AND YOUR FAMILY
            </Typography>
            <Typography color="secondary" variant="h2">
              Our Families
            </Typography>
            <Typography textAlign="left" component="span">
              We will work with you to develop individualised care plans,
              including management of chronic diseases. If we cannot assist, we
              can provide referrals or advice about the type of practitioner you
              require. We treat all enquiries sensitively and in the strictest
              confidence.
            </Typography>
          </Box>
        </Grid>
        <Grid
          sx={{ alignContent: "center", textAlign: "center" }}
          size={{ xs: 12, md: 6 }}
        >
          <img
            width={smallerScreens ? "100%" : "80%"}
            height={smallerScreens ? "100%" : "80%"}
            src="/assets/stats.svg"
            alt="stats-image"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              boxShadow: "0xp 0px 6px #222",
            }}
          />
        </Grid>
      </Grid>
    </AlternateBox>
  );
}
