import PropTypes from "prop-types";
import React from "react";
import "./InputValidation.css";

export function MatchName() {
  const [value, setValue] = React.useState("");
  return (
    <input
      onChange={(e) => {
        setValue(e.target.value);
      }}
      value={value}
      className={value === "Matias" ? "input input-match" : "input"}
    ></input>
  );
}

MatchName.propTypes = {
  value: PropTypes.string,
};

export default MatchName;
