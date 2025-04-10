import { useState, useEffect, useRef } from "react";
import Card from "./Card";
import useFetchCountries from "./hooks/fetchCountries";
import styles from "../styles/styles.module.css";
export default function Countries() {
  const [inputvalue, setInputValue] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const countries = useFetchCountries(
    "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries",
    setFilteredCountries,
  );
  const timerRef = useRef(null);

  useEffect(() => {
    if (inputvalue === "") {
      setFilteredCountries(() => countries.current);
      return;
    }
    const filtered = countries.current.filter((item) => {
      const { common } = item;
      return common
        .replaceAll(" ", "")
        .toLowerCase()
        .includes(inputvalue.replaceAll(" ", "").toLowerCase());
    });
    if (Object.is(timerRef.current, null)) {
      timerRef.current = setTimeout(() => {
        setFilteredCountries(filtered);
      }, 500);
    } else {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setFilteredCountries(filtered);
      }, 500);
    }
  }, [inputvalue, countries]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  console.log("filteredCountries", filteredCountries.length === 0);
  return (
    <div id={styles.app_wrapper}>
      <div className={styles.header_search}>
        <input
          type="text"
          name="search"
          placeholder="Search for Countries"
          value={inputvalue}
          onChange={handleChange}
        />
      </div>
      {filteredCountries.length ? (
        <div id={styles.content}>
          {filteredCountries.map((item, index) => {
            const { common, png } = item;
            return (
              <Card
                key={`country-${common}-${index}`}
                name={common}
                image={png}
              />
            );
          })}
        </div>
      ) : (
        <div className={styles.no_content}>
          <h2>No Countries Found</h2>
        </div>
      )}
    </div>
  );
}
