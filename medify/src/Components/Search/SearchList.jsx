import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/fetchData";
import { GET_HOSPITALS } from "../../hooks/constants";
import { Box, Grid, Typography, Stack } from "@mui/material";
import HospitalDetailCard from "../HospitalDetails/HospitalDetailCard";
export default function SearchList() {
  const [searchParams, _] = useSearchParams();
  const [hospitals, setHospitals] = useState([]);
  const fetcher = useFetch();
  useEffect(() => {
    const city = searchParams.get("city");
    const state = searchParams.get("state");
    if (!Object.is(city, null) && !Object.is(state, null)) {
      fetcher(setHospitals, GET_HOSPITALS, state, city);
    }
  }, [searchParams]);

  return (
    <Grid
      sx={{
        maxWidth: "80vw",
        padding: "1rem",
        marginTop: "8rem",
      }}
      container
    >
      <Grid size={{ xs: 12, md: 9 }}>
        <Typography margin="1rem" variant="h1">
          {hospitals.length} medical centers available in{" "}
          {searchParams.get("city")?.toLowerCase()}
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

      <Grid sx={{ minWidth: "80vw" }} container spacing={4}>
        <Grid size={{ xs: 12, md: 9 }}>
          <Stack direction="column" gap="1rem">
            {hospitals.map((item, index) => {
              return (
                <HospitalDetailCard
                  key={`hospitalCard-${index}`}
                  details={item}
                />
              );
            })}
          </Stack>
        </Grid>
        <Grid
          sx={{
            position: "relative",
            width: "50%",
            backgroundImage: "url('/assets/cta.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top-left",
            backgroundSize: "contain",
          }}
          size={{ xs: 12, md: 3 }}
        ></Grid>
      </Grid>
    </Grid>
  );
}
