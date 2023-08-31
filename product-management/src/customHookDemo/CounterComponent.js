import React from "react";
import { useCounter } from "./useCounter";

const CounterComponent = () => {
  const [count, increment, decrement] = useCounter(0, 2);

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
      <div>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default CounterComponent;
