import PropTypes from "prop-types";
import "./BlogPost.css";
import Card from "./Card.jsx";

export function BlogSpot(props) {
  return (
    <article className="post">
      <header className="post-header">
        <h2 className="post-title">{props.title}</h2>
        <Card
          img="https://avatars.githubusercontent.com/u/129182481?v=4"
          name="Matias Bertuccio"
          title="Student at r/Argentina-Programa"
        />
      </header>
      <ul className="post-list">
        {props.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ul>
    </article>
  );
}

BlogSpot.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  paragraphs: PropTypes.array,
};
