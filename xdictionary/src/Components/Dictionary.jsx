import data from "../utils/data.json";
import { useCallback, useState } from "react";
export default function Dictionary() {
  const [dictionary, _] = useState(data);
  const [inputVal, setInputVal] = useState("");
  const [definition, setDefinition] = useState("");
  const handleChange = useCallback((event) => {
    setInputVal(event.target.value);
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputVal === "") {
      setDefinition("");
      return;
    }
    const def = dictionary.filter(
      (item) => item["word"].toLowerCase() === inputVal.toLocaleLowerCase()
    );
    if (def.length === 0) {
      setDefinition("");
    } else {
      setDefinition(def);
    }
    // setInputVal("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Dictionary App</h2>
        <input
          id="word"
          name="word"
          type="text"
          onChange={handleChange}
          value={inputVal}
          placeholder="Search for a word..."
        />
        <button type="submit">Search</button>
      </form>
      <h3>Definition:</h3>
      {definition.length > 0 ? <p>{definition[0].meaning}</p> : null}
    </>
  );
}
