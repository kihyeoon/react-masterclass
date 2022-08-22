/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// const darkTheme = {
//   textColor: "whitesmoke",
//   backgroundColor: "#111",
// };
// const lightTheme = {
//   textColor: "#111",
//   backgroundColor: "whitesmoke",
// };

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
