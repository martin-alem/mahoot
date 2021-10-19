import React from "react";
import "./QuestionTypeInput.css";

function QuestionTypeInput() {
  return (
    <div className="QuestionTypeInput">
      <select name="questionType">
        <option selected value="quiz">
          Quiz
        </option>
        <option value="boolean">True or False</option>
      </select>
    </div>
  );
}

export default QuestionTypeInput;
