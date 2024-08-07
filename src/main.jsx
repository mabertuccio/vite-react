import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Welcome from "./components/Welcome.jsx";
import Button from "./components/Button.jsx";

/*
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Welcome name="Matias" lastName="Bertuccio" />
  </React.StrictMode>
);
*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Button className="button-red" onClick={() => alert("Hello!")}>
      Click Here!
    </Button>
  </React.StrictMode>
);
