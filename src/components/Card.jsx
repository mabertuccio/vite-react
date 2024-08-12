import PropTypes from "prop-types";
import "./Card.css";

export function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="Profile picture" className="card-img" />
      <div className="card-data">
        <header className="card-data-header">{props.name}</header>
        <span className="card-data-span">{props.position}</span>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
};

export default Card;
