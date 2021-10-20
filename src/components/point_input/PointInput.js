import React from "react";
import "./PointInput.css";

function PointInput() {
  return (
    <div className="PointInput">
      <div className="PointInput-label">
        <span className="material-icons">sports_score</span>
        <span className="PointInput-text">Points</span>
      </div>
      <select className="PointInput-input" name="point">
        <option selected value="standard">
          Standard
        </option>
        <option value="double">Double</option>
        <option value="triple">Triple</option>
      </select>
    </div>
  );
}

export default PointInput;
