import React from "react";
import "./DisplayQuestion.css";
import defaultImage from "./../../images/default_img.png";

function DisplayQuestion(props) {
    const { questionType, media, title} = props.question;
  return (
    <div className="DisplayQuestion">
      <h1 className="DisplayQuestion-type">{questionType}</h1>
      <img className="DisplayQuestion-media" src={media || defaultImage} alt="question media" />
      <h1 className="DisplayQuestion-title">{title}</h1>
      <progress className="DisplayQuestion-progress" id="file" value={props.duration * 20} max="100"></progress>
    </div>
  );
}

export default DisplayQuestion;
