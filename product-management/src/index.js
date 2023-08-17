import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// <div id="root">
//replace with some html content
//</div >
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
