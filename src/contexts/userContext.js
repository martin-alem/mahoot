import React from "react";
import useUserState from "./../hooks/useUserState";

const UserContext = React.createContext();
const UserActionContext = React.createContext();

function UserProvider(props) {
  const { userState, loggedIn, ...actions } = useUserState({});
  return <UserContext.Provider value={{userState, loggedIn}}>
    <UserActionContext.Provider value={{...actions}}>
    {props.children}
    </UserActionContext.Provider>

  </UserContext.Provider>;
}

export { UserActionContext, UserContext, UserProvider };
