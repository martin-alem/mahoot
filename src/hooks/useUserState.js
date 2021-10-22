import React from "react";
import { httpAgent } from "./../utils/util";

function useUserState(initialValue) {
  const [userState, setUserState] = React.useState(initialValue);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [message, setMessage] = React.useState({ visible: false, type: "default", message: "" });

  const linkedInLogin = (url, method, data) => {
    httpAgent(url, method, data)
      .then((response) => {
        if (response.ok) {
          response
            .json()
            .then((data) => {
              if (data.statusCode === 200) {
                setLoggedIn(true);
              } else {
                setMessage({ visible: true, type: "error", message: data.message });
              }
            })
            .catch((error) => {
              setMessage({ visible: true, type: "error", message: "Unable to connect to linkedIn servers" });
              console.error(error);
            });
        } else {
          setMessage({ visible: true, type: "error", message: response.statusText });
        }
      })
      .catch((error) => {
        setMessage({ visible: true, type: "error", message: "Unable to connect to LinkedIn servers" });
        console.error(error);
      });
  };

  const githubLogin = (url, method, data) => {
    httpAgent(url, method, data)
      .then((response) => {
        if (response.ok) {
          response
            .json()
            .then((data) => {
              if (data.statusCode === 200) {
                if (data.status === "partial") {
                  setMessage({ visible: true, type: "error", message: data.message });
                } else {
                  setLoggedIn(true);
                }
              } else {
                setMessage({ visible: true, type: "error", message: data.message });
              }
            })
            .catch((error) => {
              setMessage({ visible: true, type: "error", message: "Unable to connect to Github servers" });
              console.error(error);
            });
        } else {
          setMessage({ visible: true, type: "error", message: response.statusText });
        }
      })
      .catch((error) => {
        setMessage({ visible: true, type: "error", message: "Unable to connect to Github servers" });
        console.error(error);
      });
  };
  return { userState, loggedIn, message, setMessage, linkedInLogin, githubLogin, setUserState, setLoggedIn };
}

export default useUserState;
