import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(10);
  const timerref = useRef(null);
  useEffect(() => {
    // unmounting

    return stop;
  }, []);
  const start = () => {
    if (timerref.current !== null) return;
    timerref.current = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(timerref.current);
    timerref.current = null;
  };
  const reset = () => {
    stop();
    setCount(0);
  };
  return (
    <div>
      <h1>Timer</h1>
      <h2>Time : {count}</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Timer;
