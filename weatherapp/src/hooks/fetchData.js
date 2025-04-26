export default function useFetch() {
  const fetcher = async (setterFunc, setterLoading, city) => {
    try {
      if (city === "") {
        return;
      }
      setterLoading(true);
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${city}`
      );
      const weatherData = await response.json();
      if (response.status >= 200 && response.status <= 399) {
        setterFunc(weatherData);
      } else {
        window.alert("Failed to fetch weather data");
        setterLoading(false);
        throw new Error(weatherData.error.message);
      }
      setTimeout(() => {
        setterLoading(false);
      }, 1000);
    } catch (err) {
      setterLoading(false);
      setterFunc(null);
      console.error(err);
      return null;
    }
  };
  return fetcher;
}
