import { GET_STATES, GET_CITIES } from "./constants";
export const endPoints = {
  GET_STATES: "https://meddata-backend.onrender.com/states",
  GET_CITIES: (state) => {
    return `https://meddata-backend.onrender.com/cities/${state}`;
  },
};
