//import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";

// (theme) => theme.palette.mode === "dark" ? "#000" : "#f3f3f3",

ReactDOM.createRoot(document.getElementById("root")!).render(
  //<React.StrictMode>
  <App />
  //</React.StrictMode>,
);
