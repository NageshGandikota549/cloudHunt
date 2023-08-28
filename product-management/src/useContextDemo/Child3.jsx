import React from "react";
import { UserContext } from "./Parent";

export const Child3 = () => {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <div>
            Child 3.
            <div>{JSON.stringify(value)}</div>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};
