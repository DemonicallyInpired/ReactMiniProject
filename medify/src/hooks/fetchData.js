import {
  GET_CITIES,
  GET_STATE,
  SET_CITIES,
  SET_STATE,
  GET_HOSPITALS,
} from "./constants";
import { fetchCities, fetchHospitals, fetchState } from "./Ops";
export default function useFetch() {
  return async (setterFunc, ops, state = "", city = "") => {
    switch (ops) {
      case GET_STATE: {
        const data = await fetchState();
        if (Object.is(data, null)) {
          return;
        }
        setterFunc(() => data);
        break;
      }
      case GET_CITIES: {
        const data = await fetchCities(state);
        if (Object.is(data, null)) {
          return;
        }
        setterFunc(() => data);
        break;
      }
      case SET_CITIES: {
        if (city === "") {
          return;
        }
        setterFunc(() => city);
        break;
      }
      case SET_STATE: {
        if (state === "") {
          return;
        }
        setterFunc(() => state);
        break;
      }
      case GET_HOSPITALS: {
        const data = await fetchHospitals(state, city);
        if (Object.is(data, null)) {
          return;
        }
        setterFunc(() => data);
        break;
      }
      default: {
        throw new Error(`unspecified case`);
      }
    }
  };
}
