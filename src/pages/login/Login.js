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
  const [state] = React.useState(params);
  React.useEffect(() => {
    if (Object.keys(params).length > 0 && params["code"]) {
      httpAgent("http://localhost:5000/api/v1/linkedin/login", "GET", {})
        .then((response) => {
          if (response.ok) {
            response
              .json()
              .then((data) => {
                userContext.setUser(data);
              })
              .catch((error) => {
                console.error(error);
              });
          }
        })
        .catch((error) => {
          console.error(error);
        });
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
