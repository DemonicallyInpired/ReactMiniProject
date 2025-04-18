import SwiperContainer from "./SwiperContainer";
import "./Swiper.css";
import { Box } from "@mui/material";

import { SwiperSlide } from "swiper/react";
import { useMemo } from "react";

const getData = () => {
  const arr = ["/assets/offer1.png", "/assets/offer2.png"];
  const res = Array.from({ length: 10 }, (item, index) => {
    return arr[index % arr.length];
  });
  console.log("res", res);
  return res;
};
export default function Offers() {
  const data = useMemo(() => getData(), []);
  return (
    <Box sx={{ maxWidth: "80vw", margin: "3rem auto" }}>
      <SwiperContainer>
        {data.map((item, index) => (
          <SwiperSlide key={`offerSlider-${index}`}>
            <img
              style={{ width: "100%", height: "80%" }}
              src={item}
              alt={`offerSlider-${index}`}
            />
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </Box>
  );
}
