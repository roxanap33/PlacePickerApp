import { useState, useEffect } from "react";

export default function ProgresBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTREVAL");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress value={remainingTime} max={timer} />;
}
