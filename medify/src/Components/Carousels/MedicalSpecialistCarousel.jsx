import SwiperContainer from "./SwiperContainer";
import { Box, Typography } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import "./Swiper.css";
const data = [
  {
    name: "Dr. Lesley Hull",
    profession: "Medicine",
    src: "/assets/lesley.png",
  },
  {
    name: "Dr. Ahmad Khan",
    profession: "Neurologist",
    src: "/assets/ahmad.png",
  },
  {
    name: "Dr. Ankur Sharma",
    profession: "Medicine",
    src: "/assets/ankur.png",
  },
  {
    name: "Dr. Heena Sachdeva",
    profession: "Orthopadics",
    src: "/assets/heena.png",
  },
  {
    name: "Dr. Ahmad Stevens",
    profession: "Neurologist",
    src: "/assets/ahmad-stevens.png",
  },
];
export default function MedicalSpecialist() {
  return (
    <Box sx={{ maxWidth: "80vw", margin: "auto", padding: "1rem 0rem" }}>
      <Typography
        variant="h2"
        color="secondary"
        textAlign="center"
        sx={{ my: "1rem" }}
      >
        Our Medical Specialist
      </Typography>
      <SwiperContainer>
        {data.map((item, index) => {
          const { name, profession, src } = item;
          return (
            <SwiperSlide
              style={{ minHeight: "50vh" }}
              key={`medical-carousel-${index}`}
              className="medical-swiper-slide"
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: "90%",
                }}
              >
                <img width={"90%"} height={"90%"} src={src} alt={name} />
                <Typography variant="h5">{name}</Typography>
                <Typography variant="h6" color="primary">
                  {profession}
                </Typography>
              </Box>
            </SwiperSlide>
          );
        })}
      </SwiperContainer>
    </Box>
  );
}
