import React from "react";
import defaultImage from "./../../images/default_img.png";
import "./BooleanQuestion.css";
import { QuizActionContext } from "./../../contexts/quizContext";

function BooleanQuestion(props) {
  const quizActionContext = React.useContext(QuizActionContext);
  const deleteQuestion = (e) => {
    if (e.target.dataset.action === "delete") {
      quizActionContext.removeQuestion(props.id);
    }
  };
  const editQuestion = (e) => {
    if (e.target.dataset.action === undefined) {
      quizActionContext.editQuestion(props.id);
    }
  };
  return (
    <div onClick={editQuestion} className="BooleanQuestion">
      <div className="BooleanQuestion-delete">
        <span onClick={deleteQuestion} data-action="delete" className="material-icons">
          delete
        </span>
      </div>
      <div className="BooleanQuestion-question">
        <div className="BooleanQuestion-title">
          <h3 className="BooleanQuestion-number-type">
            {props.id + 1}. {props.question.type}
          </h3>
        </div>
        <div className="BooleanQuestion-body">
          <div className="BooleanQuestion-info">
            <div className="BooleanQuestion-duration">{props.question.duration}</div>
            <div className="BooleanQuestion-question-media">
              <p>{props.question.title}</p>
              <img className="BooleanQuestion-media" src={defaultImage} alt="media" />
            </div>
          </div>
          <div className="BooleanQuestion-answers">
            <div className="BooleanQuestion-opt3 BooleanQuestion-option">
              <div className="BooleanQuestion-indicator"></div>
            </div>
            <div className="BooleanQuestion-opt4 BooleanQuestion-option">
              <div className="BooleanQuestion-indicator"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooleanQuestion;
