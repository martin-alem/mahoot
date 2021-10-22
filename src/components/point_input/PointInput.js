import React from "react";
import "./PointInput.css";
import { QuizContext } from "./../../contexts/quizContext";

function PointInput() {
  const quizContext = React.useContext(QuizContext);
  const { edit } = quizContext.isEditable;
  return (
    <div className="PointInput">
      <div className="PointInput-label">
        <span className="material-icons">sports_score</span>
        <span className="PointInput-text">Points</span>
      </div>
      <select disabled={!edit} className="PointInput-input" name="point">
        <option defaultValue value="standard">
          Standard
        </option>
        <option value="double">Double</option>
        <option value="triple">Triple</option>
      </select>
    </div>
  );
}

export default PointInput;
