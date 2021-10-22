import React from "react";
import "./PointInput.css";
import { QuizContext, QuizActionContext } from "./../../contexts/quizContext";

function PointInput() {
  const quizContext = React.useContext(QuizContext);
  const quizActionContext = React.useContext(QuizActionContext);
  const { edit } = quizContext.isEditable;
  const [points, setPoints] = React.useState("standard");
  const handleSelectChange = (e) => {
    setPoints(e.target.value);
    quizActionContext.performEdit({ type: "point", value: e.target.value });
  };
  return (
    <div className="PointInput">
      <div className="PointInput-label">
        <span className="material-icons">sports_score</span>
        <span className="PointInput-text">Points</span>
      </div>
      <select onChange={handleSelectChange} disabled={!edit} className="PointInput-input" name="point">
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
