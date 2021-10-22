import React from "react";
import "./CreateButton.css";
import { Link } from "react-router-dom";

function CreateButton() {
  return (
    <div className="CreateButton">
      <Link to="/editor">
        <button className="CreateButton-button" type="button">
          <span className="material-icons">add</span>
          <span className="CreateButton-text">Create</span>
        </button>
      </Link>
    </div>
  );
}

export default CreateButton;
