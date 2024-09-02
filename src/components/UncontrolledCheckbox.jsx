import PropTypes from "prop-types";
import React from "react";

export function UncontrolledCheckbox(props) {
  const [value, setValue] = React.useState(props.initialValue);

  return (
    <React.Fragment>
      <label>{props.name}</label>
      <input
        onChange={() => {
          setValue(!value);
        }}
        type="checkbox"
        value={value}
        checked={value}
      />
    </React.Fragment>
  );
}

UncontrolledCheckbox.propTypes = {
  name: PropTypes.string,
  initialValue: PropTypes.bool,
};

export default UncontrolledCheckbox;
