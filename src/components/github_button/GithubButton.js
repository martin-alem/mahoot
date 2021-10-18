import React from "react";
import "./GithubButton.css";

function GithubButton() {
  return (
    <div className="GithubButton">
      <button className="GithubButton-button" type="button">
        <i className="fab fa-github GithubButton-icon"></i>
        <span className="GithubButton-text">Continue with Github</span>
      </button>
    </div>
  );
}

export default GithubButton;
