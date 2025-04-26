import { useState } from "react";
import useFetch from "../hooks/fetchData";
import WeatherCard from "./WeatherCard";
import "./WeatherContainer.css";
export default function WeatherCardContainer() {
  const [data, setData] = useState(null);
  const [city, setCurrCity] = useState("");
  const [loading, setloading] = useState(false);
  const fetcher = useFetch();
  const handleSubmit = (event) => {
    event.preventDefault();
    fetcher(setData, setloading, city);
  };
  const handleChange = (event) => {
    setCurrCity(event.target.value);
  };
  return (
    <div id="formContainer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {!loading ? (
        <div className="weather-cards">
          {data && <WeatherCard data={data} />}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
