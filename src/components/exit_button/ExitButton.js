import React from "react";
import "./ExitButton.css";
import { Link } from "react-router-dom";

function ExitButton() {
  return (
    <div className="ExitButton">
      <Link to="/home">
        <button className="ExitButton-button" type="button">
          <span className="material-icons">close</span>
          <span className="ExitButton-text">Exit</span>
        </button>
      </Link>
    </div>
  );
}

export default ExitButton;
