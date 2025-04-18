import axios from "axios";
import { GET_CITIES, GET_STATE, endPoints } from "./constants";

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
    console.log(URI);
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
