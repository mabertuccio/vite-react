import React from "react";
import PropTypes from "prop-types";
import "./Page.css";

function Article(props) {
  const content = props.content;

  return (
    <article className="article">
      <header className="article-header">{content.title}</header>
      <p className="article-body">{content.body}</p>
    </article>
  );
}

function Articles(props) {
  const articlesQuantity = props.articles.length;
  return (
    <React.Fragment>
      <ul className="articles-list">
        {props.articles.map((article) => (
          <li key={article.title} className="articles-list-item">
            <Article content={article} />
          </li>
        ))}
      </ul>
      <div className="articles-total">
        Total Articles: {articlesQuantity === 0 ? "None" : articlesQuantity}
      </div>
    </React.Fragment>
  );
}

export function Page(props) {
  return (
    <div className="main-page">
      <h1>{props.title}</h1>
      <Articles articles={props.articles} />
    </div>
  );
}

Article.propTypes = {
  content: PropTypes.array,
};

Articles.propTypes = {
  articles: PropTypes.string,
};

Page.propTypes = {
  title: PropTypes.string,
  articles: PropTypes.string,
};

export default Page;
