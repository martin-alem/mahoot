import React from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

function ProtectedRoute({ component: Component, ...rest }) {
  const userContext = React.useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (userContext.loggedIn) {
          return <Component {...props} />;
        } else {
          return <Redirect to={{ path: "/", state: { from: props.location } }} />;
        }
      }}
    />
  );
}

export default ProtectedRoute;
