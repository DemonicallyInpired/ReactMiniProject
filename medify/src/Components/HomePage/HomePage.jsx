import Hero from "../Hero/Hero";
import Offers from "../Carousels/Offer";
import Specialistations from "../Specialistations/Specialistations";
import MedicalSpecialist from "../Carousels/MedicalSpecialistCarousel";
import Care from "../Care/Care";
import BlogAndNews from "../BlogAndNews/BlogAndNews";
import Statistics from "../Famlies/Families";
import Faqs from "../FAQS/Faqs";
import DownloadApp from "../DownloadApp/Download";
import { Box } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { SearchPageContext } from "../../utils/ContextData";

export default function HomePage() {
  const [searchParams, _] = useSearchParams();
  const isSearchPage = !(searchParams.has("city") && searchParams.has("state"));

  return (
    <Box>
      <SearchPageContext.Provider value={isSearchPage}>
        <Hero />
      </SearchPageContext.Provider>
      {isSearchPage ? (
        <>
          <Offers />
          <Specialistations />
          <MedicalSpecialist />
          <Care />
          <BlogAndNews />
          <Statistics />
          <Faqs />
        </>
      ) : null}
    </Box>
  );
}
