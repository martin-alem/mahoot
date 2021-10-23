import React from "react";
import "./SaveButton.css";
import { httpAgent } from "./../../utils/util";
import { QuizContext, QuizActionContext } from "./../../contexts/quizContext";
import { UserActionContext } from "./../../contexts/userContext";

function SaveButton() {
  const quizContext = React.useContext(QuizContext);
  const quizActionContext = React.useContext(QuizActionContext);
  const userActionContext = React.useContext(UserActionContext);
  const [isSaving, setIsSaving] = React.useState(false);
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
        setIsSaving(true);
        submitQuiz({ questions, quiz });
      }
    }
  };

  const submitQuiz = async (quiz) => {
    try {
      const url = "http://localhost:4000/api/v1/quiz";
      const method = "POST";
      const response = await httpAgent(url, method, quiz);
      if (response.ok) {
        const results = await response.json();
        console.log(results);
      }
    } catch (error) {
      userActionContext.setMessage({ visible: true, type: "error", message: "Unable to save your save." });
      console.log(error);
    }
    setIsSaving(false);
  };

  const questionTest = (question) => {
    return question["title"] !== "" && question["answers"].length > 0;
  };
  return (
    <div className="SaveButton">
      <button onClick={saveQuestions} type="button" className="SaveButton-button" disabled={isSaving}>
        <span className="material-icons">{isSaving ? "hourglass_bottom" : "save"}</span>
        <span className="SaveButton-text">{isSaving ? "Saving..." : "Save"}</span>
      </button>
    </div>
  );
}

export default SaveButton;
