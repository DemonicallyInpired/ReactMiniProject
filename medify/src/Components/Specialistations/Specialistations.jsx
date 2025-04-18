import { Grid, Typography, Button } from "@mui/material";
import AlternateBox from "../AlternateBox/AlternateBox";
import SpecialistationCard from "./SpecialistationCard";

const data = [
  { src: "/assets/Hospital.png", name: "Dentistry" },
  { src: "/assets/primary-care.png", name: "Primary Care" },
  { src: "/assets/cardiology.png", name: "Cardiology" },
  { src: "/assets/mri.png", name: "MRI Resonance" },
  { src: "/assets/blood-test.png", name: "Blood Test" },
  { src: "/assets/piscologist.png", name: "Piscologist" },

  { src: "/assets/Drugstore.png", name: "Laboratory" },
  { src: "/assets/X-Ray.png", name: "X-Ray" },
];
export default function Specialistations() {
  return (
    <AlternateBox>
      <Grid
        container
        sx={{ maxWidth: "90vw", margin: "auto", padding: "1rem 0rem" }}
        spacing={4}
        textAlign="center"
      >
        <Grid size={{ xs: 12 }}>
          <Typography variant="h2" color="secondary" textAlign="center">
            Find by specialistation
          </Typography>
        </Grid>
        {data.map((item, index) => {
          const { src, name } = item;
          return (
            <SpecialistationCard
              key={`grid-specialistation-item-${index}`}
              name={name}
              src={src}
            />
          );
        })}
        <Grid size={{ xs: 12 }}>
          <Button disabled size="large" variant="contained">
            View More
          </Button>
        </Grid>
      </Grid>
    </AlternateBox>
  );
}
