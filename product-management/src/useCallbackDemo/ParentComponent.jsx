import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);

  console.log("parent rerendered");

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleChildButtonClick = useCallback(() => {
    console.log("child button clicked...");
  }, []);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleIncrement}> Increment </button>

      <ChildComponent onClick={handleChildButtonClick} />
    </div>
  );
};

export default ParentComponent;
