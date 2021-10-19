import React from "react";
import "./EditButton.css";

function EditButton() {
  return (
    <div className="EditButton">
      <button className="EditButton-button" type="button">
        <span className="material-icons">edit</span>
        <span className="EditButton-text">Edit</span>
      </button>
    </div>
  );
}

export default EditButton;
