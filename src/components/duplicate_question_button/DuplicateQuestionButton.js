import React from "react";
import "./DuplicateQuestionButton.css";
import { QuizContext, QuizActionContext } from "../../contexts/quizContext";

function DuplicateQuestionButton() {
  const quizContext = React.useContext(QuizContext);
  const quizActionContext = React.useContext(QuizActionContext);
  const duplicateQuestion = () => {
    if (quizContext.isEditable.edit) {
      quizActionContext.duplicateQuestion();
    }
  };
  return (
    <div className="DuplicateQuestionButton">
      <button onClick={duplicateQuestion} type="button" className="DuplicateQuestionButton-button">
        <span className="material-icons">content_copy</span>
        <span className="DuplicateQuestionButton-text">Duplicate</span>
      </button>
    </div>
  );
}

export default DuplicateQuestionButton;
