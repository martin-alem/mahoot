import React from "react";
import "./Login.css";
import GithubButton from "./../../components/github_button/GithubButton";
import LinkedInButton from "./../../components/linkedin_button/LinkedInButton";
import Logo from "../../components/logo/Logo";
import { extractSearchParams, httpAgent } from "./../../utils/util";
import { UserContext } from "./../../contexts/userContext";

function Login(props) {
  const userContext = React.useContext(UserContext);
  const params = extractSearchParams(props.location.search);

  const linkedInLogin = (url, method, data) => {
    httpAgent(url, method, data)
      .then((response) => {
        if (response.ok) {
          response
            .json()
            .then((data) => {
              userContext.setUser(data);
              console.log(data);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const githubLogin = (url) => {};

  React.useEffect(() => {
    if (Object.keys(params).length > 0 && params["code"] && params["state"]) {
      const url = "http://localhost:5000/api/v1/linkedin/auth";
      const method = "POST";
      const body = params;
      linkedInLogin(url, method, body);
    } else {
      console.log("No queryString");
    }
  }, []);

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
