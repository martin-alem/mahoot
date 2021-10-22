import React from "react";
import "./QuestionInput.css";
import { QuizContext } from "./../../contexts/quizContext";

function QuestionInput() {
  const quizContext = React.useContext(QuizContext);
  const { edit } = quizContext.isEditable;
  console.log(edit);
  return (
    <div className="QuestionInput">
      <textarea disabled={!edit} className="QuestionInput-question" placeholder="Start typing your question"></textarea>
    </div>
  );
}

export default QuestionInput;
