import { useState, useEffect, useRef } from "react";
import { endPoints } from "../utils/EndPoints";
import styles from "../styles/styles.module.css";
import { GET_CITIES, GET_COUNTRIES, GET_STATES } from "../constants/constants";
import { AliasMapping } from "../constants/constants";
import Message from "./Message";

const StateSelector = (props) => {
  const [countriesData, setCountriesData] = useState({
    GET_COUNTRIES: { items: [], filtered: true },
    GET_STATES: { items: [], filtered: false },
    GET_CITIES: { items: [], filtered: false },
  });
  const citiesRef = useRef(null);
  const countriesRef = useRef(null);
  const stateRef = useRef(null);
  const allRef = [countriesRef.current, stateRef.current, citiesRef.current];
  const [_, setDummyAction] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const getCountries = endPoints[GET_COUNTRIES];
      const resp = await fetch(getCountries());
      const countries = await resp.json();
      setCountriesData((prevState) => {
        return {
          ...prevState,
          GET_COUNTRIES: { items: [...countries], filtered: true },
        };
      });
    };
    fetchData();
  }, []);
  const handleSelectChange = async (event, id) => {
    switch (id) {
      case GET_COUNTRIES: {
        countriesRef.current = event.target.value;
        const getState = endPoints[GET_STATES];
        const resp = await fetch(getState(countriesRef.current));
        const newState = await resp.json();
        setCountriesData((prevState) => {
          return {
            ...prevState,
            GET_STATES: { items: [...newState], filtered: true },
            GET_CITIES: { items: [], filtered: false },
          };
        });
        break;
      }
      case GET_STATES: {
        stateRef.current = event.target.value;
        const getCities = endPoints[GET_CITIES];
        const resp = await fetch(
          getCities(countriesRef.current, stateRef.current)
        );
        const newCities = await resp.json();
        setCountriesData((prevState) => {
          return {
            ...prevState,
            GET_CITIES: {
              items: [...newCities],
              filtered: true,
            },
          };
        });
        break;
      }
      case GET_CITIES: {
        citiesRef.current = event.target.value;
        allRef[allRef.length - 1] = citiesRef.current;
        setDummyAction((prevState) => !prevState);
        break;
      }
    }
  };
  const isValidated = allRef.every((item, index) => !Object.is(item, null));
  return (
    <div>
      <div className={styles.SelectContainer}>
        {Object.keys(countriesData).map((item, index) => {
          const currSelected = countriesData[item]?.items;
          const filterd = countriesData[item]?.filtered;
          return (
            <select
              id={item}
              onChange={(event) => handleSelectChange(event, item)}
              disabled={!filterd}
              key={`select-${item}`}
            >
              <option key={`select-${item}`} value={item}>
                {`Select ${AliasMapping[item]}`}
              </option>
              {currSelected.map((item1, index) => {
                return (
                  <option value={item1} key={item1}>
                    {item1}
                  </option>
                );
              })}
            </select>
          );
        })}
      </div>
      <Message allRef={allRef} />
    </div>
  );
};

export default StateSelector;
