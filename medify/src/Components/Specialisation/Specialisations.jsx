import { Box, Grid, Stack, Typography, Button, Skeleton } from "@mui/material";
import { AlternateBox } from "../Styled";
import { useMemo, useState } from "react";
const getStaticData = () => {
  const data = [
    { src: "/assets/Hospital.png", name: "Dentistry" },
    { src: "/assets/Stethoscope.png", name: "Primary Care" },
    { src: "/assets/cardiology.png", name: "Cardiology" },
    { src: "/assets/mri.png", name: "MRI Resonance" },
    { src: "/assets/blood-test.png", name: "Blood Test" },
    { src: "/assets/piscologist.png", name: "Piscologist" },
    { src: "/assets/Hospital.png", name: "Laboratory" },
    { src: "/assets/X-Ray.png", name: "X-Ray" },
    { src: "/assets/cardiology.png", name: "Cardiology" },
    { src: "/assets/blood-test.png", name: "Blood Test" },
  ];
  return data;
};
const SpecialisationsCard = ({ children }) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: "white", padding: "1rem 0rem" }}
    >
      {children}
    </Stack>
  );
};
export default function Specialisations({ nItems }) {
  const [currSelection, setCurrSelection] = useState(nItems);
  const [available, setAvailable] = useState(true);

  const data = useMemo(() => {
    return getStaticData();
  });
  const addItems = () => {
    setAvailable(() => false);
    setTimeout(() => {
      setCurrSelection(Math.min(nItems + currSelection, data.length));
      setAvailable(true);
    }, 2000);
  };
  return (
    <AlternateBox>
      <Box
        sx={{
          maxWidth: "80vw",
          minHeight: "40vh",
          margin: "8rem auto",
          padding: "2rem 0rem",
          textAlign: "center",
        }}
      >
        <Typography sx={{ marginBottom: "1rem" }} variant="h4">
          Find By Specialisation
        </Typography>
        {!available ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "20vh",
            }}
          >
            <Skeleton variant="text" sx={{ fontSize: "1rem", width: "80%" }} />
            <Skeleton variant="text" sx={{ fontSize: "1rem", width: "80%" }} />
            <Skeleton variant="text" sx={{ fontSize: "1rem", width: "80%" }} />
            <Skeleton variant="text" sx={{ fontSize: "1rem", width: "80%" }} />

            {/* For other variants, adjust the size with `width` and `height` */}
          </Box>
        ) : (
          <>
            <Grid container spacing={2}>
              {data.slice(0, currSelection).map((item, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
                  <SpecialisationsCard>
                    <img
                      src={item.src}
                      width={"20%"}
                      height={"20%"}
                      alt={`specialisation-${index}`}
                    />
                    <Typography variant="h6">{item.name}</Typography>
                  </SpecialisationsCard>
                </Grid>
              ))}
            </Grid>
            <Button
              disabled={currSelection === data.length}
              onClick={addItems}
              sx={{ marginTop: "1rem" }}
              size="large"
            >
              View More
            </Button>
          </>
        )}
      </Box>
    </AlternateBox>
  );
}
