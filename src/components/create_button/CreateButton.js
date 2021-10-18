import React from "react";
import "./CreateButton.css";

function CreateButton() {
  return (
    <div className="CreateButton">
      <button className="CreateButton-button" type="button">
        <span className="material-icons">add</span>
        <span className="CreateButton-text">Create</span>
      </button>
    </div>
  );
}

export default CreateButton;
