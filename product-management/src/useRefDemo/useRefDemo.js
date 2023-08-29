import React, { useRef, useState, useEffect } from "react";

const useRefDemo = () => {
  //   const [userName, setUserName] = useState("");
  const userNameRef = useRef("Nagesh");
  const inputRef = useRef(null);

  const handleNameChange = (event) => {
    // setUserName(event.target.value);
    userNameRef.current = event.target.value;
  };

  useEffect(() => {
    inputRef.current.focus();
    // inputRef.current.style.backgroundColor = "red";
  }, []);

  return (
    <div>
      <div>{userNameRef.current}</div>
      <input
        ref={inputRef}
        value={userNameRef.current}
        onInput={handleNameChange}
        type="text"
      />
    </div>
  );
};

export default useRefDemo;
