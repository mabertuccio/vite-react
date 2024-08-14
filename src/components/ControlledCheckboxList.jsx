import PropTypes from "prop-types";
import { UncontrolledCheckbox } from "./UncontrolledCheckbox.jsx";
import "./ControlledCheckboxList.css";

export function ControlledCheckboxList(props) {
  const entries = Object.entries(props.items);
  return (
    <div className="checkbox-list">
      {entries.map(([label, checked]) => (
        <UncontrolledCheckbox key={label} name={label} initialValue={checked} />
      ))}
    </div>
  );
}

ControlledCheckboxList.propTypes = {
  items: PropTypes.object,
};

export default ControlledCheckboxList;
