import React, { useContext } from "react";
import { Child3 } from "./Child3";
import { UserContext } from "./Parent";

const Child2 = () => {
  const userdetails = useContext(UserContext);
  return (
    <div>
      Child2
      {JSON.stringify(userdetails)}
      <Child3 />
    </div>
  );
};

export default Child2;
