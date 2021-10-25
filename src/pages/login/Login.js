import React from "react";
import "./Login.css";
import GithubButton from "./../../components/github_button/GithubButton";
import LinkedInButton from "./../../components/linkedin_button/LinkedInButton";
import Logo from "../../components/logo/Logo";
import DisplayMessage from "./../../components/display_message/DisplayMessage";
import { extractSearchParams } from "./../../utils/util";
import { UserActionContext } from "./../../contexts/userContext";

function Login(props) {
  const userActionContext = React.useContext(UserActionContext);
  const params = extractSearchParams(props.location.search);

  React.useEffect(() => {
    if (Object.keys(params).length > 0 && params["code"] && params["state"]) {
      //http://localhost:5000/api/v1/linkedin/auth
      const url = "http://api.auth.mahoot.io/api/v1/linkedin/auth";
      const method = "POST";
      const body = params;
      userActionContext.linkedInLogin(url, method, body);
    } else if (Object.keys(params).length > 0 && params["code"]) {
      const url = "http://api.auth.mahoot.io/api/v1/github/auth";
      const method = "POST";
      const body = params;
      userActionContext.githubLogin(url, method, body);
    } else if (Object.keys(params).length > 0 && params["error"]) {
      userActionContext.setMessage({ visible: true, type: "warn", message: "You denied permission to access your data" });
    }
  }, []);
  return (
    <div className="Login">
      <DisplayMessage />
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
