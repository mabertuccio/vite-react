import PropTypes from "prop-types";
import { ControlledCheckbox } from "./ControlledCheckbox.jsx";

export function CheckboxListWithState(props) {
  const entries = Object.entries(props.items);
  console.log(entries);
  return (
    <div>
      {entries.map(([label, checked]) => (
        <ControlledCheckbox key={label} name={label} value={checked} />
      ))}
    </div>
  );
}

CheckboxListWithState.propTypes = {
  items: PropTypes.object,
};
