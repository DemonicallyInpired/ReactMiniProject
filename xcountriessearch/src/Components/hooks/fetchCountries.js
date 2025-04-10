import { useEffect, useRef } from "react";
const useFetchCountries = (endpoint, setFiltered) => {
  const countryRef = useRef([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        countryRef.current = data;
        setFiltered(() => countryRef.current);
      } catch (err) {
        console.error(err);
        return null;
      }
    };
    fetchData();
  }, [endpoint, setFiltered]);
  return countryRef;
};
export default useFetchCountries;
