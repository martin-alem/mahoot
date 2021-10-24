import React from "react";
import "./LockGameButton.css";

function LockGameButton() {
  return (
    <div className="LockGameButton">
      <button type="button" className="LockGameButton-button">
        <span className="material-icons LockGameButton-text">lock_open</span>
      </button>
    </div>
  );
}

export default LockGameButton;
