import { Box, Grid, Typography } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import Search from "../Search/Search";
import HospitalDetailCard from "../HospitalDetails/HospitalDetailCard";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const handleChange = useCallback((event) => {
    setSearch(() => event.target.value);
  }, []);
  useEffect(() => {
    if (localStorage.getItem("bookings")) {
      setBookings(() => JSON.parse(localStorage.getItem("bookings")));
    }
  }, []);
  useEffect(() => {
    setFiltered(bookings);
  }, [bookings]);
  const filterBookings = useCallback(() => {
    const newFiltered = bookings.filter((item) => {
      return (
        item["Hospital Name"]?.toLowerCase().includes(search.toLowerCase()) ||
        item["City"]?.toLowerCase().includes(search.toLocaleLowerCase()) ||
        item["State"]?.toLowerCase().includes(search.toLocaleLowerCase())
      );
    });
    setFiltered(newFiltered);
  }, [search, bookings]);
  return (
    <Box>
      <Search
        bookings={search}
        handleBookingChange={handleChange}
        filterBookings={filterBookings}
      />
      <Grid sx={{ marginTop: { xs: "12rem", md: "2rem" } }} container>
        {filtered.length === 0 ? (
          <Typography
            variant="h1"
            color="primary.main"
            textAlign={"center"}
            width="100vw"
            marginBottom={"4rem"}
          >
            No Bookings Found
          </Typography>
        ) : (
          filtered.map((item, index) => {
            return (
              <Grid
                sx={{
                  width: { xs: "90%", md: "60%" },
                }}
                spacing={4}
                key={`booking-item-${index}`}
              >
                <HospitalDetailCard details={item} isBooking={true} />
              </Grid>
            );
          })
        )}

        {filtered.length && (
          <Grid
            className="image-content"
            sx={{
              backgroundImage: "url('/assets/cta.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              minHeight: "20vh",
              marginLeft: "1.4rem",
            }}
            size={{ xs: 12, md: 3 }}
          ></Grid>
        )}
      </Grid>
    </Box>
  );
}
