import React from "react";
import "./ShowOption.css";
import defaultImage from "./../../images/default_img.png";
import QuizOption from "./../../components/quiz_option/QuizOption";

function ShowOption(props) {
  return (
    <div className="ShowOption">
      <img className="ShowOption-img" src={props.question.media || defaultImage} alt="image" />
      {<QuizOption question={props.question} setGame={props.setGame} />}
    </div>
  );
}

export default ShowOption;
