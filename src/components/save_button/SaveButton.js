import React from "react";
import "./SaveButton.css";

function SaveButton() {
  return (
    <div className="SaveButton">
      <button type="button" className="SaveButton-button">
        <span className="material-icons">save</span>
        <span className="SaveButton-text">Save</span>
      </button>
    </div>
  );
}

export default SaveButton;
