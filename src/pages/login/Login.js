import React from "react";
import "./Login.css";
import GithubButton from "./../../components/github_button/GithubButton";
import LinkedInButton from "./../../components/linkedin_button/LinkedInButton";
import Logo from "../../components/logo/Logo";
import { extractSearchParams } from "./../../utils/util";
import { UserContext, UserActionContext } from "./../../contexts/userContext";
import { Redirect } from "react-router-dom";

function Login(props) {
  const userContext = React.useContext(UserContext);
  const userActionContext = React.useContext(UserActionContext);
  const params = extractSearchParams(props.location.search);

  React.useEffect(() => {
    if (Object.keys(params).length > 0 && params["code"] && params["state"]) {
      const url = "http://localhost:5000/api/v1/linkedin/auth";
      const method = "POST";
      const body = params;
      userActionContext.linkedInLogin(url, method, body);
    } else if (Object.keys(params).length > 0 && params["code"]) {
      const url = "http://localhost:5000/api/v1/github/auth";
      const method = "POST";
      const body = params;
      userActionContext.githubLogin(url, method, body);
    } else if (Object.keys(params).length > 0 && params["error"]) {
      console.log(params["error_description"]);
    }
  }, []);

  return userContext.loggedIn ? (
    <Redirect to="/home" />
  ) : (
    <div className="Login">
      <div className="Login-logo">
        <Logo type="default" />
      </div>
      <div className="Login-buttons">
        <LinkedInButton />
        <GithubButton />
      </div>
    </div>
  );
}

export default Login;
