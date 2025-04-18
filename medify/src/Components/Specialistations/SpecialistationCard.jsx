import { Grid, Box, Typography } from "@mui/material";
export default function SpecialistationCard({ name, src }) {
  return (
    <Grid
      sx={{ backgroundColor: "white" }}
      size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "2rem",
          height: "100%",
        }}
      >
        <img src={src} alt={name} />
        <Typography sx={{ textWrap: "nowrap" }} variant="body1">
          {name}
        </Typography>
      </Box>
    </Grid>
  );
}
