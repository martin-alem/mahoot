import React from "react";
import "./QuestionInput.css";

function QuestionInput() {
  return (
    <div className="QuestionInput">
      <textarea className="QuestionInput-question" placeholder="Start typing your question"></textarea>
    </div>
  );
}

export default QuestionInput;
