import Counter from "./Components/Counter";
import { useState } from "react";
import styles from "./css/styles.module.css";
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.CounterContainer}>
      <h2>Counter App</h2>
      <span>Count: {count}</span>
      <div className={styles.Counter}>
        <Counter
          handleFunc={(event) => {
            setCount((prevState) => prevState + 1);
          }}
          variant={"Increment"}
        />
        <Counter
          handleFunc={(event) => {
            setCount((prevState) => prevState - 1);
          }}
          variant={"Decrement"}
        />
      </div>
    </div>
  );
}
