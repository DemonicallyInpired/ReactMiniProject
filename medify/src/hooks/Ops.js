import axios from "axios";
import { GET_CITIES, GET_HOSPITALS, GET_STATE, endPoints } from "./constants";

export const fetchState = async () => {
  try {
    const URI = endPoints[GET_STATE];
    const data = await axios.get(URI, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (data.status >= 200 && data.status <= 399) {
      return data.data;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};
export const fetchCities = async (state) => {
  if (state === "") {
    return null;
  }
  try {
    const URI = `${endPoints[GET_CITIES]}/${state}`;
    const cities = await axios.get(`${endPoints[GET_CITIES]}/${state}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (cities.status >= 200 && cities.status <= 399) {
      return cities.data;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};
export const fetchHospitals = async (state, city) => {
  try {
    if (state === "" || city === "") {
      throw new Error("invalid URI both state and city should be present");
    }

    const hospitalEndpointFn = endPoints[GET_HOSPITALS];
    const URI = hospitalEndpointFn(state, city);
    const data = await axios.get(URI, {
      headers: { "Content-Type": "application/json" },
    });
    if (data.status >= 200 && data.status <= 399) {
      return data.data;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};
