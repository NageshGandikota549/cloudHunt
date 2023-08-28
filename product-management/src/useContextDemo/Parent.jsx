import React, { createContext } from "react";
import { Child1 } from "./Child1";

export const UserContext = createContext();

export const Parent = () => {
  const userInfo = {
    id: 1,
    name: "nagesh",
    age: 28,
    country: "India",
  };

  return (
    <div>
      <UserContext.Provider value={userInfo}>
        <Child1 />
      </UserContext.Provider>
    </div>
  );
};
