import React from "react";
import "./SaveButton.css";
import { httpAgent, getFromLocalStorage } from "./../../utils/util";
import { QuizContext, QuizActionContext } from "./../../contexts/quizContext";
import { UserActionContext } from "./../../contexts/userContext";
import { Redirect } from "react-router-dom";

function SaveButton() {
  const quizContext = React.useContext(QuizContext);
  const quizActionContext = React.useContext(QuizActionContext);
  const userActionContext = React.useContext(UserActionContext);
  const [isSaving, setIsSaving] = React.useState(false);
  const [doneSaving, setDoneSaving] = React.useState(false);
  const saveQuestions = () => {
    const { questions, quiz } = quizContext;

    if (!quiz.title) {
      userActionContext.setMessage({ visible: true, type: "warn", message: "You must provide a title for your quiz" });
    } else {
      if (questions.length === 0) {
        userActionContext.setMessage({ visible: true, type: "error", message: "You don't have any question in you quiz" });
      } else if (!questions.every(questionTest)) {
        userActionContext.setMessage({ visible: true, type: "error", message: "Please check your questions to make sure it has a title and answers matching the question typ" });
      } else {
        quizActionContext.resetState();
        setIsSaving(true);
        if (quizContext.mode === "create") {
          submitQuiz({ questions, quiz });
        } else if (quizContext.mode === "edit") {
          editQuiz({ questions, quiz });
        }
      }
    }
  };

  const submitQuiz = async (quiz) => {
    try {
      const access_token = getFromLocalStorage("access_token");
      const url = `https://mahoot-main-server-3ddtc.ondigitalocean.app/api/v1/quiz/?access_token=${access_token}`;
      const method = "POST";
      const response = await httpAgent(url, method, quiz);
      if (response.ok) {
        const results = await response.json();
        setIsSaving(false);
        console.log(results);
        setDoneSaving(true);
      }
    } catch (error) {
      setIsSaving(false);
      userActionContext.setMessage({ visible: true, type: "error", message: "Unable to save your quiz." });
      console.log(error);
    }
  };

  const editQuiz = async (quiz) => {
    try {
      const access_token = getFromLocalStorage("access_token");
      const url = `https://mahoot-main-server-3ddtc.ondigitalocean.app/api/v1/quiz/?access_token=${access_token}`;
      const method = "PUT";
      const response = await httpAgent(url, method, quiz);
      if (response.ok) {
        const results = await response.json();
        setIsSaving(false);
        console.log(results);
        setDoneSaving(true);
      }
    } catch (error) {
      setIsSaving(false);
      userActionContext.setMessage({ visible: true, type: "error", message: "Unable to save your quiz." });
      console.log(error);
    }
  };

  const questionTest = (question) => {
    if (question.questionType === "quiz" && question.answers.length === 4 && question.title !== "") {
      return true;
    } else if (question.questionType === "boolean" && question.answers.length === 2 && question.title !== "") {
      return true;
    } else {
      return false;
    }
  };
  return doneSaving ? (
    <Redirect to="/home" />
  ) : (
    <div className="SaveButton">
      <button onClick={saveQuestions} type="button" className="SaveButton-button" disabled={isSaving}>
        <span className="material-icons">{isSaving ? "hourglass_bottom" : "save"}</span>
        <span className="SaveButton-text">{isSaving ? "Saving..." : "Save"}</span>
      </button>
    </div>
  );
}

export default SaveButton;
