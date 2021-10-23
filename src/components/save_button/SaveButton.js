import React from "react";
import "./SaveButton.css";
import { QuizContext, QuizActionContext } from "./../../contexts/quizContext";

function SaveButton() {
  const quizContext = React.useContext(QuizContext);
  const quizActionContext = React.useContext(QuizActionContext);
  const saveQuestions = () => {
    const { questions, quiz } = quizContext;

    if (!quiz.title) {
      console.error("You must provide a title for the quiz");
    } else {
      console.log(quiz.title, questions);
    }
  };
  return (
    <div className="SaveButton">
      <button onClick={saveQuestions} type="button" className="SaveButton-button">
        <span className="material-icons">save</span>
        <span className="SaveButton-text">Save</span>
      </button>
    </div>
  );
}

export default SaveButton;
