import React, { useReducer, useState } from "react";

const counterReducer = (state: any, action: any) => {
  //action = { type: "Incre" }
  switch (action.type) {
    case "Incre":
      return { count: state.count + 1 };
    case "Desc":
      return { count: state.count - 1 };
    case "Reset":
      return { count: 0 };
    default:
      return state;
  }
};

export const UseReducerDemo = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  const hanldeIncre = () => dispatch({ type: "Incre" });
  const hanldeDec = () => dispatch({ type: "Desc" });
  const hanldeReset = () => dispatch({ type: "Reset" });

  return (
    <div>
      <div>
        <b>{state.count}</b>
      </div>
      <button onClick={hanldeIncre}>Increment</button>
      <button onClick={hanldeDec}>Decrement</button>
      <button onClick={hanldeReset}>Reset</button>
    </div>
  );
};
