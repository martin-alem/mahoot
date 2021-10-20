import React from "react";
import "./AddQuestionButton.css";

function AddQuestionButton() {
  return (
    <div className="AddQuestion">
      <button type="button" className="AddQuestionButton-button">
        <span className="material-icons">add</span>
        <span className="AddQuestionButton-text">Add question</span>
      </button>
    </div>
  );
}

export default AddQuestionButton;
