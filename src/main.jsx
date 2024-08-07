import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Welcome from "./components/Welcome.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Welcome name="Matias" lastName="Bertuccio" />
  </React.StrictMode>
);
