import React from "react";
import "./Login.css";
import GithubButton from "./../../components/github_button/GithubButton";
import LinkedInButton from "./../../components/linkedin_button/LinkedInButton";
import Logo from "../../components/logo/Logo";
import { extractSearchParams, httpAgent } from "./../../utils/util";

function Login(props) {
  const params = extractSearchParams(props.location.search);
  const [state] = React.useState(params);
  React.useEffect(() => {
    if (Object.keys(params).length > 0 && params["code"]) {
      console.log(state);
    } else {
      console.log("No data");
    }
  }, [state]);
  return (
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
