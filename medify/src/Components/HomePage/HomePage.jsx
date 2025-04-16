import Hero from "../Hero/Hero";
import OfferCarousel from "../OfferCarousel/OfferCarousel";
import Specialisations from "../Specialisation/Specialisations";
export default function HomePage() {
  return (
    <div>
      <Hero />
      <OfferCarousel />
      <Specialisations nItems={8} />
    </div>
  );
}
