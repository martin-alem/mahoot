import React from "react";
import "./SaveButton.css";
import { QuizContext, QuizActionContext } from "./../../contexts/quizContext";
import { UserActionContext } from "./../../contexts/userContext";

function SaveButton() {
  const quizContext = React.useContext(QuizContext);
  const quizActionContext = React.useContext(QuizActionContext);
  const userActionContext = React.useContext(UserActionContext);
  const saveQuestions = () => {
    const { questions, quiz } = quizContext;

    if (!quiz.title) {
      userActionContext.setMessage({ visible: true, type: "warn", message: "You must provide a title for your quiz" });
    } else {
      if (questions.length === 0) {
        userActionContext.setMessage({ visible: true, type: "error", message: "You don't have any question in you quiz" });
      } else if (!questions.every(questionTest)) {
        userActionContext.setMessage({ visible: true, type: "error", message: "Please check your questions to make sure it has a title and answers" });
      } else {
        //reset all state and submit to database
        console.log(quiz.title, questions);
      }
    }
  };

  const questionTest = (question) => {
    return question["title"] !== "" && question["answers"].length > 0;
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
