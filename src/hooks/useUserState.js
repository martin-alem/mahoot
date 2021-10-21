import React from "react";
import { httpAgent } from "./../utils/util";

function useUserState(initialValue) {
  const [userState, setUserState] = React.useState(initialValue);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const linkedInLogin = (url, method, data) => {
    httpAgent(url, method, data)
      .then((response) => {
        if (response.ok) {
          response
            .json()
            .then((data) => {
              if (data.statusCode === 200) {
                setLoggedIn(true);
              }
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
  return { userState, loggedIn, linkedInLogin, githubLogin, setUserState };
}

export default useUserState;
