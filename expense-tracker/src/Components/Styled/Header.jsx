import { styled } from "@mui/material";

const Heading = styled("h1")({
  fontSize: { md: "2rem", sm: "1rem" },
  color: "#fefefe",
  textAlign: "center",
  boxSizing: "border-box",
  padding: "1rem",
  fontWeight: "bold",
});

export const SubHeading = styled("h2")(Heading);

export default Heading;
