import React, { useRef } from "react";

const InputFocus = () => {
  const ref = useRef(null);
  const handleFocus = () => {
    ref.current.focus();
  };
  return (
    <div>
      <h1>Input Focus With UseRef</h1>
      <input ref={ref} type="text" placeholder="Enter Something" />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default InputFocus;
