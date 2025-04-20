import useFetch from "../../hooks/fetchData";
import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TextField, Typography } from "@mui/material";
import { Form, useOutletContext } from "react-router-dom";
import {
  FormControl,
  Select,
  MenuItem,
  Box,
  Button,
  InputAdornment,
} from "@mui/material";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { SET_STATE, GET_CITIES, SET_CITIES } from "../../hooks/constants.js";
import Pills from "../Hero/Pills.jsx";
import { SearchPageContext } from "../../utils/ContextData.js";

export default function Search({
  bookings,
  handleBookingChange,
  filterBookings,
}) {
  const [currState, setcurrState] = useState("");
  const [currCity, setcurrCity] = useState("");
  const [cities, setCities] = useState([]);
  const isSearchPage = useContext(SearchPageContext);
  const { state } = useOutletContext();
  const fetcher = useFetch();
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage =
    location.pathname === "/search" || location.pathname === "/my-bookings";

  useEffect(() => {
    fetcher(setCities, GET_CITIES, currState);
  }, [currState]);
  const handleCityChange = (event) => {
    fetcher(setcurrCity, SET_CITIES, "", event.target.value);
  };
  const handleStateChange = (event) => {
    fetcher(setcurrState, SET_STATE, event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (location.pathname === "/my-bookings") {
      filterBookings();
      return;
    }
    const state = currState;
    const city = currCity;
    const params = new URLSearchParams({ state: state, city: city });
    navigate(`/search?${params.toString()}`);
  };
  return (
    <Box
      sx={{
        position: { lg: isSearchPage ? "absolute" : "static" },
        bottom: { xs: "-30%", sm: "-8%" },
        left: "0%",
        padding: "2rem",
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: !isSearchPage ? "primary.main" : "#fefefe",
        maxHeight: "fit-content",
        marginTop: { xs: !isSearchPage ? "0%" : "-20%", lg: 0 },
        borderBottomLeftRadius: !isSearchPage ? "15%" : "0%",
        borderBottomRightRadius: !isSearchPage ? "15%" : "0%",
        minHeight: !isSearchPage ? "20vh" : "inherit",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            width: !isSearchPage
              ? { xs: "50vw", sm: "80vw", md: "80vw", lg: "90vw" }
              : "inherit",
            flexDirection: { xs: "column", lg: "row" },
            backgroundColor: !isSearchPage ? "#fff" : "none",
            padding: !isSearchPage ? "2rem" : "0rem",
            borderRadius: !isSearchPage ? "10px" : "0px",
            position: !isSearchPage ? "absolute" : "static",
            left: !isSearchPage ? { xs: "20%", sm: "2%", md: "4%" } : "inherit",
            boxShadow:
              location.pathname === "/my-bookings" ? "0px 0px 6px #222" : "0px",
          }}
        >
          {location.pathname === "/my-bookings" ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                flexDirection: { xs: "column", md: "row" },
                gap: "1rem",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography color="primary" variant="h2">
                My Bookings
              </Typography>
              <TextField
                type="text"
                SelectProps={{ id: "search-hospital" }}
                label="Search By Hospital"
                placeholder="Search By Hospital"
                onChange={handleBookingChange}
                value={bookings}
              />
            </Box>
          ) : (
            <>
              <FormControl fullWidth>
                <Select
                  value={currState}
                  id="state"
                  name="state"
                  onChange={handleStateChange}
                  displayEmpty
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="">
                    <em>Select State</em>
                  </MenuItem>
                  {state.map((item, index) => (
                    <MenuItem key={`state-select-${index}`} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <Select
                  id="city"
                  name="city"
                  value={currCity}
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  }
                  displayEmpty
                  onChange={handleCityChange}
                >
                  <MenuItem value="">
                    <em>Select Cities</em>
                  </MenuItem>
                  {cities.map((item, index) => (
                    <MenuItem
                      value={item}
                      key={`citiy-select-options-${index}`}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </>
          )}
          <Button
            sx={{ textWrap: "nowrap", minWidth: "fit-content" }}
            size="large"
            variant="contained"
            type="submit"
          >
            <Typography
              component="span"
              textTransform="capitalize"
              textAlign="center"
              alignItems="center"
              sx={{ display: "flex" }}
            >
              <SearchIcon /> Search
            </Typography>
          </Button>
        </Box>
        {!isHomePage ? (
          <>
            <Typography
              variant="h6"
              textAlign="center"
              sx={{ padding: "1rem" }}
            >
              You may be looking for
            </Typography>
            <Pills />
          </>
        ) : null}
      </Form>
    </Box>
  );
}
