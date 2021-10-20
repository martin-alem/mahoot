import React from "react";
import useUserState from "./../hooks/useUserState";

const UserContext = React.createContext();

function UserProvider(props) {
  const [user, setUser] = useUserState({});
  return <UserContext.Provider value={{user, setUser}}>{props.children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
