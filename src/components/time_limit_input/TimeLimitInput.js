import React from "react";
import "./TimeLimitInput.css";
import { QuizContext } from "./../../contexts/quizContext";

function TimeLimitInput() {
  const quizContext = React.useContext(QuizContext);
  const { edit } = quizContext.isEditable;
  return (
    <div className="TimeLimitInput">
      <div className="TimeLimitInput-label">
        <span className="material-icons">timer</span>
        <span className="TimeLimitInput-text">Time Limit</span>
      </div>
      <select disabled={!edit} className="TimeLimitInput-input" name="timeLimit">
        <option defaultValue value="5">
          5 Seconds
        </option>
        <option value="10">10 Seconds</option>
        <option value="20">20 Seconds</option>
        <option value="30">30 Seconds</option>
        <option value="40">40 Seconds</option>
        <option value="50">50 Seconds</option>
        <option value="60">60 Seconds</option>
      </select>
    </div>
  );
}

export default TimeLimitInput;
