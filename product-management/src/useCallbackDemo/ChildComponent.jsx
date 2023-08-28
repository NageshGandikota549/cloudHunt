import React from "react";

const ChildComponent = React.memo(({ onClick }) => {
  console.log("child rendered");
  return (
    <div>
      <button onClick={onClick}>Child Button</button>
    </div>
  );
});

export default ChildComponent;


// React.memo(Component)
