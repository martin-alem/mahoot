import React from "react";
import "./TitleInput.css";
import { QuizActionContext, QuizContext } from "./../../contexts/quizContext";

function TitleInput() {
  const quizActionContext = React.useContext(QuizActionContext);
  const quizContext = React.useContext(QuizContext);
  const [title, setTitle] = React.useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
    quizActionContext.setQuiz((prevState) => {
      return {
        ...prevState,
        title: e.target.value,
      };
    });
  };
  return (
    <div className="TitleInput">
      <form className="TitleInput-form">
        <input onChange={handleChange} value={title || quizContext.quiz.title} type="text" className="TitleInput-title" placeholder="Quiz Title" />
      </form>
    </div>
  );
}

export default TitleInput;
