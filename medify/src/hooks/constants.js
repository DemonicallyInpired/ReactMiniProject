export const GET_CITIES = "GET_CITIES";
export const GET_STATE = "GET_STATES";
export const SET_CITIES = "SET_CITIES";
export const SET_STATE = "SET_STATES";
export const GET_HOSPITALS = "GET_HOSPITALS";
export const endPoints = {
  [GET_STATE]: "https://meddata-backend.onrender.com/states",
  [GET_CITIES]: "https://meddata-backend.onrender.com/cities",
  [GET_HOSPITALS]: (state, city) => {
    return `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`;
  },
};
