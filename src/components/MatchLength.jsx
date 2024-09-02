import PropTypes from "prop-types";
import React from "react";
import "./InputValidation.css";

export function MatchLength(props) {
  const [value, setValue] = React.useState("");
  return (
    <input
      type="password"
      onChange={(e) => {
        setValue(e.target.value);
      }}
      value={value}
      minLength={props.minLength}
      className={
        value.length >= 1 && value.length <= props.minLength
          ? "input input-match"
          : "input"
      }
    ></input>
  );
}

MatchLength.propTypes = {
  value: PropTypes.string,
  minLength: PropTypes.number,
};

export default MatchLength;
