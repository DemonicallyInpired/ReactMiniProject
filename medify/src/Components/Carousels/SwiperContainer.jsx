import { Swiper } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function SwiperContainer({ children }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={3}
      spaceBetween={30}
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
        1536: {
          slidesPerView: 4,
        },
      }}
    >
      {children}
    </Swiper>
  );
}
