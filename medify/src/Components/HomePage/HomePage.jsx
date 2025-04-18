import Hero from "../Hero/Hero";
import Offers from "../Carousels/Offer";
import Specialistations from "../Specialistations/Specialistations";
import MedicalSpecialist from "../Carousels/MedicalSpecialistCarousel";
import Care from "../Care/Care";
import BlogAndNews from "../BlogAndNews/BlogAndNews";
import Statistics from "../Famlies/Families";
import Faqs from "../FAQS/Faqs";
import DownloadApp from "../DownloadApp/Download";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Offers />
      <Specialistations />
      <MedicalSpecialist />
      <Care />
      <BlogAndNews />
      <Statistics />
      <Faqs />
      <DownloadApp />
    </>
  );
}
