import {
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Stack,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import { endPoints } from "../../../utils/endPoints";
import axios from "axios";
import {
  GET_STATES,
  GET_CITIES,
  SET_STATE,
  SET_CITY,
} from "../../../utils/constants";

const togglerData = [
  {
    name: "Doctor",
    src: "/assets/Doctor.png",
  },
  { name: "Lab", src: "/assets/Drugstore.png" },
  { name: "Hospital", src: "/assets/Hospital.png" },
  { name: "Medical Store", src: "/assets/Capsule.png" },
  { name: "Ambulance", src: "/assets/Ambulance.png" },
];
export default function Suggestions() {
  const [states, setState] = useState([]);
  const [cities, setCities] = useState([]);
  const [currState, setcurrState] = useState("");
  const [currCity, setcurrCity] = useState("");

  const getData = useCallback(async (ops, state = "") => {
    console.log(state, "state", ops);
    try {
      const URI =
        ops === GET_STATES
          ? endPoints[GET_STATES]
          : endPoints[GET_CITIES](state);
      const data = await axios.get(URI, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("data", data, URI);

      switch (ops) {
        case GET_STATES: {
          setState(() => data?.data);
          break;
        }
        case GET_CITIES: {
          setCities(() => data?.data);
          break;
        }
      }
    } catch (err) {
      console.error(err);
      return null;
    }
  }, []);
  const handleChange = (event, ops) => {
    switch (ops) {
      case SET_CITY: {
        setcurrCity(() => event.target.value);
        break;
      }
      case SET_STATE: {
        setcurrState(() => event.target.value);
        break;
      }
    }
  };
  useEffect(() => {
    getData(GET_STATES);
  }, []);
  useEffect(() => {
    if (currState !== "") {
      getData(GET_CITIES, currState);
    }
  }, [currState]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: "50vw",
        position: { xl: "absolute", xs: "static" },
        left: "45%",
        backgroundColor: "white",
        top: "58%",
        padding: "2rem",
        boxSizing: "border-box",
        borderRadius: "10px",
        boxShadow: "0px 0px 5px #222",
      }}
    >
      <Stack
        direction="column"
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <Stack
          sx={{ width: "100%" }}
          direction={{ xs: "column", md: "row" }}
          justifyContent="center"
          spacing={8}
        >
          <FormControl
            variant="filled"
            sx={{
              m: 1,
              width: { xs: "100%", md: "40%" },
              position: "relative",
            }}
          >
            <InputLabel htmlFor="states">States</InputLabel>
            <span className="MuiInputBase-searchIcon" />
            <Select
              id="states"
              label="States"
              onChange={(event) => handleChange(event, SET_STATE)}
              value={currState}
              slotProps={{
                select: {
                  native: true,
                },
              }}
            >
              <MenuItem value="">
                <em>States</em>
              </MenuItem>
              {states.map((item, index) => {
                return <MenuItem value={item}>{item}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <FormControl
            variant="filled"
            sx={{ m: 1, width: { xs: "100%", md: "40%" } }}
          >
            <InputLabel htmlFor="cities">Cities</InputLabel>
            <Select
              labelId="cities"
              id="cities"
              value={currCity}
              onChange={(event) => handleChange(event, SET_CITY)}
            >
              <MenuItem value="">
                <em>City</em>
              </MenuItem>
              {cities.map((item, index) => {
                return <MenuItem value={item}>{item}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Stack>
        <Typography sx={{ textAlign: "center" }} variant="h5">
          You May be looking for
        </Typography>
        <ToggleButtonGroup
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {togglerData.map((item, index) => {
            const { name, src } = item;
            return (
              <ToggleButton
                key={`toggleIcon-${name}-${index}`}
                value={name}
                aria-label={name}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                  width: "150px",
                  height: "150px",
                }}
                disabled={name !== "Hospital"}
              >
                <img src={src} alt={name} width={"100%"} height={"100%"} />
                <Typography variant="h6" sx={{ textWrap: "nowrap" }}>
                  {name}
                </Typography>
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </Stack>
    </Box>
  );
}
