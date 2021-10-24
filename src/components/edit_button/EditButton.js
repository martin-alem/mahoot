import React from "react";
import "./EditButton.css";
import { httpAgent } from "./../../utils/util";
import {QuizActionContext } from "./../../contexts/quizContext";
import { Redirect } from "react-router-dom";

function EditButton(props) {
  const [doneFetching, setDoneFetching] = React.useState(false);
  const quizActionContext = React.useContext(QuizActionContext);
  const editQuiz = async () => {
    try {
      const url = `http://localhost:4000/api/v1/question/${props.quizId}`;
      const method = "GET";
      const response = await httpAgent(url, method, {});
      if (response.ok) {
        const results = await response.json();
        setDoneFetching(true);
        quizActionContext.setMode("edit")
        quizActionContext.setQuestion(results["questions"]);
        quizActionContext.setQuiz({ id: props.quizId, title: props.quizTitle });
      }
    } catch (error) {
      // userActionContext.setMessage({ visible: true, type: "error", message: "Unable to fetch quizzes." });
      console.log(error);
    }
  };
  return doneFetching ? (
    <Redirect to="/editor" />
  ) : (
    <div className="EditButton">
      <button className="EditButton-button" type="button">
        <span className="material-icons">edit</span>
        <span className="EditButton-text">Edit</span>
      </button>
    </div>
  );
}

export default EditButton;
