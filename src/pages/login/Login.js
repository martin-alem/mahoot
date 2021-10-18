import React from "react";
import logo from "./../../images/logo.svg";
import "./Login.css";
import GithubButton from "./../../components/github_button/GithubButton";
import LinkedInButton from "./../../components/linkedin_button/LinkedInButton";

function Login() {
  return (
    <div className="Login">
      <div className="Login-logo">
        <img src={logo} alt="mahoot logo" />
      </div>
      <div className="Login-buttons">
        <LinkedInButton />
        <GithubButton />
      </div>
    </div>
  );
}

export default Login;
