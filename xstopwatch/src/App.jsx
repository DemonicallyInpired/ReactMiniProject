import { useState, useEffect } from "react";
export default function App() {
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("00");
  const [running, setrunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  useEffect(() => {
    if (running) {
      const newInterval = setInterval(() => {
        setMinutes((prevState) => String(Number(prevState) + 1 / 60));
        setSeconds((prevState) =>
          String((Number(prevState) + 1) % 60).padStart(2, "0")
        );
      }, 1000);
      setIntervalId(newInterval);
    } else {
      clearInterval(intervalId);
    }
  }, [running]);
  const handleStart = () => {
    setrunning((prevState) => !prevState);
  };
  const handleReset = () => {
    setMinutes("0");
    setSeconds("00");
    setrunning(false);
  };
  return (
    <div>
      <h1>Stopwatch</h1>
      <div>
        <span>Time: {Math.floor(minutes)}</span>:<span>{seconds}</span>
      </div>
      <button onClick={handleStart}>{running ? "Stop" : "Start"}</button>
      <button onClick={handleReset} type="button">
        Reset
      </button>
    </div>
  );
}
