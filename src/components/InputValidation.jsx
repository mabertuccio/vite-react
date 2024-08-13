import PropTypes from "prop-types";
import React from "react";
import "./InputValidation.css";

export function InputValidation() {
  const [value, setValue] = React.useState("");
  return (
    <input
      onChange={(e) => {
        setValue(e.target.value);
      }}
      value={value}
      className={
        hasMinimunLength(value) && hasNoWhitespace(value) && isValidEmail(value)
          ? "input input-match"
          : "input"
      }
    ></input>
  );
}

const hasMinimunLength = function (value) {
  return Boolean(value.length >= 8);
};

const hasNoWhitespace = function (value) {
  return Boolean(!value.match(" "));
};

const isValidEmail = function (value) {
  return Boolean(
    value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
  );
};

InputValidation.propTypes = {
  value: PropTypes.string,
  minLength: PropTypes.number,
};

export default InputValidation;
