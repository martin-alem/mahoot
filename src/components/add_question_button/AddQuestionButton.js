import React from "react";
import "./AddQuestionButton.css";
import { QuizActionContext } from "../../contexts/quizContext";

function AddQuestionButton() {
  const quizActionContext = React.useContext(QuizActionContext);

  const addQuestion = () => {
    quizActionContext.addQuestion();
  };
  return (
    <div className="AddQuestion">
      <button onClick={addQuestion} type="button" className="AddQuestionButton-button">
        <span className="material-icons">add</span>
        <span className="AddQuestionButton-text">Add question</span>
      </button>
    </div>
  );
}

export default AddQuestionButton;
