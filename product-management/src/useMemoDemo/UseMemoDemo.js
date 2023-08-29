import React, { useMemo, useState } from "react";

export const UseMemoDemo = () => {
  const [counter, setCounter] = useState(0);
  const [limit, setLimit] = useState(10);
  console.time();

  const evenNumbers = useMemo(() => {
    console.log("re renderr momo function", limit);
    return new Array(limit)
      .fill(0)
      .map((x, idx) => {
        if (idx % 2 === 0) return idx;
      })
      .filter((x) => x);
  }, [limit]);

  console.timeEnd();

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleLimitChange = (event) => {
    if (event.target.value) setLimit(parseInt(event.target.value));
    else setLimit(0);
  };

  return (
    <div>
      {JSON.stringify(evenNumbers)}
      <div>
        <input onInput={handleLimitChange} type="text" />
      </div>
      <div>{counter}</div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
