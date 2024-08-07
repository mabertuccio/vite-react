import PropTypes from "prop-types";
import "./Welcome.css";

export function Welcome(props) {
  return (
    <div className="card">
      Welcome, Mr. {props.name} {props.lastName}
    </div>
  );
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Welcome;
