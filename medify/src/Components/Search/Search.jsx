import useFetch from "../../hooks/fetchData";
import { Typography } from "@mui/material";
import { Form } from "react-router-dom";
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
import {
  GET_STATE,
  SET_STATE,
  GET_CITIES,
  SET_CITIES,
} from "../../hooks/constants.js";
import Pills from "../Hero/Pills.jsx";
export default function Search() {
  const [currState, setcurrState] = useState("");
  const [currCity, setcurrCity] = useState("");
  const [state, setState] = useState([]);
  const [cities, setCities] = useState([]);

  const fetcher = useFetch();

  useEffect(() => {
    fetcher(setState, GET_STATE);
  }, []);
  useEffect(() => {
    fetcher(setCities, GET_CITIES, currState);
  }, [currState]);
  const handleCityChange = (event) => {
    fetcher(setcurrCity, SET_CITIES, "", event.target.value);
  };
  const handleStateChange = (event) => {
    fetcher(setcurrState, SET_STATE, event.target.value);
  };
  return (
    <Box
      sx={{
        position: { lg: "absolute" },
        bottom: { xs: "-32%", sm: "0" },
        left: "0%",
        padding: "2rem",
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "#fefefe",
        maxHeight: "fit-content",
        marginTop: { xs: "-20%", lg: 0 },
      }}
    >
      <Form>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            minWidth: { xs: "60vw", lg: "inherit" },
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <FormControl fullWidth>
            <Select
              value={currState}
              onChange={handleStateChange}
              inputProps={{ id: "state-select" }}
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
              value={currCity}
              inputProps={{ id: "city-select" }}
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
                <MenuItem value={item} key={`citiy-select-options-${index}`}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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
        <Typography variant="h6" textAlign="center" sx={{ padding: "1rem" }}>
          You may be looking for
        </Typography>
        <Pills />
      </Form>
    </Box>
  );
}
