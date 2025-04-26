import "./WeatherCard.css";
export default function WeatherCard({ data }) {
  return (
    <>
      <div className="weather-card">
        <h2>Temprature</h2>
        <p>{data.current.temp_c}&deg;C</p>
      </div>
      <div className="weather-card">
        <h2>Hummidity</h2>
        <p>{data.current.humidity}%</p>
      </div>
      <div className="weather-card">
        <h2>Condition</h2>
        <p>{data.current.condition.text}</p>
      </div>
      <div className="weather-card">
        <h2>Wind Speed</h2>
        <p>{data.current.wind_kph} kph</p>
      </div>
    </>
  );
}
