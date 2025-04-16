import { useMemo } from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const getCarouselData = () => {
  let img = ["assets/Group10.png", "/assets/Group11.png"];
  const arr = Array.from({ length: img.length * 5 }, (item, index) => {
    return img[index % img.length];
  });
  return arr;
};

export default function OfferCarousel() {
  const data = useMemo(() => getCarouselData(), []);
  return (
    <Box sx={{ maxWidth: "90vw", margin: "auto", marginTop: "6rem" }}>
      <Swiper
        modules={[Pagination, Navigation, A11y, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ duration: 1000 }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 60,
          },
          1536: {
            slidesPerView: 6,
            spaceBetween: 80,
          },
        }}
      >
        {data.map((slide, index) => (
          <SwiperSlide>
            <Box
              sx={{
                width: {
                  xl: "15vw",
                  lg: "18vw",
                  md: "22vw",
                  sm: "45vw",
                  xs: "100vw",
                },
                height: "20vh",
              }}
            >
              <img
                src={slide}
                width={"100%"}
                height={"100%"}
                alt={`slider-image-${index}`}
                style={{ borderRadius: "10px" }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
