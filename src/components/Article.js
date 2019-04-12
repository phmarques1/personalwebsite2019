import React from "react";
import "./Article.css";
import classnames from "classnames";

const Article = props => (
  <div className="Article">
    <img src={props.articleImg} />
    <h3 className="article--Title">{props.articleTitle}</h3>
    <p className="article--Description">Read more</p>
  </div>
);

export default Article;
