import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/fetchData";
import { GET_HOSPITALS } from "../../hooks/constants";
import { Box, Grid, Typography } from "@mui/material";
import HospitalDetailCard from "../HospitalDetails/HospitalDetailCard";
export default function SearchList() {
  const [searchParams, _] = useSearchParams();
  const [hospitals, setHospitals] = useState([]);
  const fetcher = useFetch();
  useEffect(() => {
    const city = searchParams.get("city");
    const state = searchParams.get("state");
    fetcher(setHospitals, GET_HOSPITALS, state, city);
  }, [searchParams]);

  return (
    <Grid
      sx={{ maxWidth: "80vw", margin: "12rem auto 0rem auto", padding: "1rem" }}
    >
      <Grid size={{ xs: 12, md: 9 }}>
        <Typography margin="1rem" variant="h1">
          {hospitals.length} medical centers available in{" "}
          {searchParams.get("city")}
        </Typography>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <img
            width={"24rem"}
            height={"24rem"}
            style={{ textAlign: "center" }}
            src="/assets/tick.png"
            alt="tick"
          />
          <Typography sx={{ marginBottom: "1rem" }} component="span">
            Book appointments with minimum wait-time & verified doctor details
          </Typography>
        </Box>
      </Grid>

      <Grid
        sx={{ marginTop: "1rem", maxWidth: "90vw", margin: "auto" }}
        container
        spacing={4}
      >
        {hospitals.map((item, index) => (
          <HospitalDetailCard key={`hospitalCard-${index}`} details={item} />
        ))}
        <Grid
          sx={{
            position: "relative",
            height: "30vh",
            width: "100%",
            backgroundImage: "url('/assets/cta.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
          size={{ xs: 12, md: 3 }}
        ></Grid>
      </Grid>
    </Grid>
  );
}
