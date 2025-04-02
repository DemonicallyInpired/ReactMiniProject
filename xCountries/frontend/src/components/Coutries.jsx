import { useEffect, useState } from "react";
import Card from "./Card";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const resp = await fetch(
          "https://xcountries-backend.azurewebsites.net/all"
        );
        if (resp.status >= 400 && resp.status <= 599) {
          console.error(resp);
          throw new Error(JSON.stringify(resp.body));
        }
        const countries = await resp.json();
        setCountries(() => {
          return countries;
        });
      } catch (err) {
        console.error(`Error fetching data: `);
      }
    };
    fetchCountries();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "90vw",
        margin: "auto",
      }}
    >
      {countries.map(({ name, flag, abbr }, index) => {
        return (
          <Card
            name={name}
            flag={flag}
            abbr={abbr}
            key={`flag-${abbr}-${index}`}
          />
        );
      })}
    </div>
  );
};
export default Countries;
