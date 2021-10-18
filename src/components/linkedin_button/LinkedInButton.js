import React from "react";
import "./LinkedInButton.css";

function LinkedInButton() {
  return (
    <div className="LinkedInButton">
      <button className="LinkedInButton-button" type="button">
        <i className="fab fa-linkedin-in LinkedInButton-icon"></i>
        <span className="LinkedInButton-text">Continue with linkedin</span>
      </button>
    </div>
  );
}

export default LinkedInButton;
