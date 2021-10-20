import React from "react";
import useUserState from "./../hooks/useUserState";

const userContext = React.createContext();

function UserProvider(props) {
  const [user] = useUserState({});
  return <userContext.Provider value={user}>{props.children}</userContext.Provider>;
}

export { userContext, UserProvider };
