import React from "react";
import "./TitleInput.css";
import { QuizActionContext } from "./../../contexts/quizContext";

function TitleInput() {
  const quizActionContext = React.useContext(QuizActionContext);
  const [title, setTitle] = React.useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
    quizActionContext.setQuiz({ title: e.target.value });
  };
  return (
    <div className="TitleInput">
      <form className="TitleInput-form">
        <input onChange={handleChange} value={title} type="text" className="TitleInput-title" placeholder="Quiz Title" />
      </form>
    </div>
  );
}

export default TitleInput;
