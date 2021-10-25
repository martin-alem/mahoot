import React from "react";
import { Route, Redirect } from "react-router-dom";
import { UserActionContext } from "../../contexts/userContext";
import { httpAgent, getFromLocalStorage, setToLocalStorage } from "./../../utils/util";

function ProtectedRoute({ component: Component, ...rest }) {
  const userActionContext = React.useContext(UserActionContext);
  React.useEffect(() => {
    const url = "https://mahoot-main-server-aey8w.ondigitalocean.app/";
    const method = "GET";
    const data = {};
    httpAgent(url, method, data)
      .then((response) => {
        if (response.ok) {
          response
            .json()
            .then((data) => {
              userActionContext.setUserState(data.message);
            })
            .catch((error) => console.error(error));
        } else {
          setToLocalStorage({ key: "loggedIn", value: false });
          window.location.replace("/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [rest.path]);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (getFromLocalStorage("loggedIn")) {
          return <Component {...props} />;
        } else {
          return <Redirect to={{ path: "/", state: { from: props.location } }} />;
        }
      }}
    />
  );
}

export default ProtectedRoute;
