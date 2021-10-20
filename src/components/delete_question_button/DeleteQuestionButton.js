import React from "react";
import "./DeleteQuestionButton.css";

function DeleteQuestionButton() {
  return (
    <div className="DeleteQuestionButton">
      <button className="DeleteQuestionButton-button" type="button">
        <span className="material-icons">delete_forever</span>
        <span className="DeleteQuestionButton-text">Delete</span>
      </button>
    </div>
  );
}

export default DeleteQuestionButton;
