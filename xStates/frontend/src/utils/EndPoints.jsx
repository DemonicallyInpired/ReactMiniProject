import { GET_CITIES, GET_COUNTRIES, GET_STATES } from "../constants/constants";
export const endPoints = {
  GET_COUNTRIES: () => {
    return "https://crio-location-selector.onrender.com/countries";
  },
  GET_STATES: (countryName) => {
    return `https://crio-location-selector.onrender.com/country=${countryName}/states`;
  },
  GET_CITIES: (countryName, stateName) => {
    return `https://crio-location-selector.onrender.com/country=${countryName}/state=${stateName}/cities`;
  },
};
