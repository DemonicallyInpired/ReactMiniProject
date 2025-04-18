import { Box, Button, Typography } from "@mui/material";
const pillsData = [
  { name: "Doctor", src: "/assets/Doctor.png" },
  { name: "Medical Store", src: "/assets/Drugstore.png" },
  { name: "Hospital", src: "/assets/Hospital.png" },
  { name: "Medical Store", src: "/assets/Capsule.png" },
  { name: "Ambulance", src: "/assets/Ambulance.png" },
];
export default function Pills() {
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "center",
      }}
    >
      {pillsData.map((item, index) => {
        const { name, src } = item;
        return (
          <Button
            sx={{
              flexDirection: "column",
              size: "small",
              textTransform: "capitalize",
              border: name === "Hospital" ? "4px solid #2AA7FF" : "none",
            }}
            variant="transparent"
            key={`toggleHeaderItems-${index}`}
            disabled={name !== "Hospital"}
          >
            <img src={src} alt={name} />
            <Typography variant="body1">{name}</Typography>
          </Button>
        );
      })}
    </Box>
  );
}
