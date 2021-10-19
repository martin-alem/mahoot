import React from "react";
import "./ExitButton.css";

function ExitButton() {
  return (
    <div className="ExitButton">
      <button className="ExitButton-button" type="button">
        <span className="material-icons">close</span>
        <span className="ExitButton-text">Exit</span>
      </button>
    </div>
  );
}

export default ExitButton;
