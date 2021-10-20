import React from "react";
import "./QuestionTypeInput.css";

function QuestionTypeInput() {
  return (
    <div className="QuestionTypeInput">
      <div className="QuestionTypeInput-label">
        <span className="material-icons">help_outline</span>
        <span className="QuestionTypeInput-text">Question Type</span>
      </div>
      <select className="QuestionTypeInput-input" name="questionType">
        <option selected value="quiz">
          Quiz
        </option>
        <option value="boolean">True or False</option>
      </select>
    </div>
  );
}

export default QuestionTypeInput;
