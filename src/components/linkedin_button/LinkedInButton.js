import React from "react";
import "./LinkedInButton.css";

function LinkedInButton(props) {
  const responseType = process.env.REACT_APP_RESPONSE_TYPE;
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const redirectURI = process.env.REACT_APP_REDIRECT_URI;
  const state = process.env.REACT_APP_STATE;
  const scope = process.env.REACT_APP_SCOPE;

  const login = () => {
    const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectURI}&state=${state}&scope=${scope}`;
    window.location.assign("http://localhost:3000/?code=1234456&state=eiie8w7weh");
  };
  return (
    <div className="LinkedInButton">
      <button onClick={login} className="LinkedInButton-button" type="button">
        <i className="fab fa-linkedin-in LinkedInButton-icon"></i>
        <span className="LinkedInButton-text">Continue with linkedin</span>
      </button>
    </div>
  );
}

export default LinkedInButton;
