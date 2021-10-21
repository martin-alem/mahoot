import React from "react";
import "./GithubButton.css";

function GithubButton() {
  const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;

  const login = () => {
    const url = `https://github.com/login/oauth/authorize?client_id=${clientId}`;
    window.location.assign(url);
  };
  return (
    <div className="GithubButton">
      <button onClick={login} className="GithubButton-button" type="button">
        <i className="fab fa-github GithubButton-icon"></i>
        <span className="GithubButton-text">Continue with Github</span>
      </button>
    </div>
  );
}

export default GithubButton;
