import React from "react";
import "./EndGameButton.css";

function EndGameButton() {
  return (
    <div className="EndGameButton">
      <button type="button" className="EndGameButton-button">
        <span className="EndGameButton-text">End</span>
      </button>
    </div>
  );
}

export default EndGameButton;
