import React from "react";
import "./DuplicateQuestionButton.css";

function DuplicateQuestionButton() {
  return (
    <div className="DuplicateQuestionButton">
      <button type="button" className="DuplicateQuestionButton-button">
        <span className="material-icons">content_copy</span>
        <span className="DuplicateQuestionButton-text">Save</span>
      </button>
    </div>
  );
}

export default DuplicateQuestionButton;
