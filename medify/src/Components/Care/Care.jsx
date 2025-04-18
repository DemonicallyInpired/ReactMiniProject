import AlternateBox from "../AlternateBox/AlternateBox";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";

const info = [
  "Stay Updated About Your Health",
  "Check Your Results Online",
  "Manage Your Appointments",
];
export default function Care() {
  const largeScreens = useMediaQuery("(min-width : 1200px)");
  return (
    <AlternateBox sx={{ padding: "2rem" }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <img
            width={largeScreens ? "80%" : "100%"}
            height={largeScreens ? "80%" : "100%"}
            src="/assets/patientcaring.png"
            alt="care-1-image"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Typography
              fontWeight="bold"
              textTransform="capitalize"
              variant="body1"
              color="primary"
            >
              HELPING PATIENTS FROM AROUND THE GLOBE!!
            </Typography>
            <Typography
              sx={{ display: "flex", gap: "0.5em", flexWrap: "wrap" }}
              component="span"
            >
              <Typography color="primary" variant="h2">
                Patient
              </Typography>
              <Typography color="secondary" variant="h2">
                Caring
              </Typography>
            </Typography>
            <Typography
              variant="body1"
              fontWeight="200"
              textAlign="left"
              letterSpacing={1}
            >
              Our goal is to deliver quality of care in a courteous, respectful,
              and compassionate manner. We hope you will allow us to care for
              you and strive to be the first and best choice for healthcare.
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "1rem",
                flexDirection: "column",
              }}
            >
              {info.map((item, index) => (
                <Box
                  key={`infoCaring-${index}`}
                  sx={{ display: "flex", gap: "1rem", alignItems: "center" }}
                >
                  <img
                    width={24}
                    height={24}
                    src="/assets/tick-blue.png"
                    alt="tick-icon"
                  />
                  <Typography color="secondary" variant="h6">
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </AlternateBox>
  );
}
