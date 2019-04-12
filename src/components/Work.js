import React from "react";
import "./Work.css";
import classnames from "classnames";

const Work = props => (
  <div className={classnames("", props.wrapperStyle)}>
    <div className="workItems">
      <div className="workInfo">
        <span className={classnames("", props.tagStyle)}>{props.workTag}</span>
        <h2 className={classnames("", props.workTitleStyle)}>
          {props.workTitle}
        </h2>
        <p className={classnames("", props.workDescriptionStyle)}>
          {props.workDescription}
        </p>
        <a
          href={props.workLinkURL}
          target="_blank"
          className={classnames("", props.workLinkStyle)}
        >
          {props.workLinkDetails}
        </a>
      </div>
      <div className="workImageWrapper">
        <img
          src={props.workImage}
          className={classnames("", props.workImageComponent)}
        />
      </div>
    </div>
  </div>
);

export default Work;
