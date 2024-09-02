import PropTypes from "prop-types";
import "./Button.css";

export function Button(props) {
  return (
    <button
      className={"button " + props.className || ""}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};

export default Button;
