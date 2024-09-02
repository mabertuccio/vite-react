import PropTypes from "prop-types";
import React from "react";

export function ControlledCheckbox(props) {
  const [value, setValue] = React.useState(props.value);
  return (
    <React.Fragment>
      <label>{props.name}</label>
      <input
        type="checkbox"
        onChange={() => {
          setValue(!value);
        }}
        value={value}
        checked={value}
      />
    </React.Fragment>
  );
}

ControlledCheckbox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
};
