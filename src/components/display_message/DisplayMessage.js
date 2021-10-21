import React from "react";
import "./DisplayMessage.css";
import {UserContext, UserActionContext} from "./../../contexts/userContext";

function DisplayMessage()
{
  const userContext = React.useContext(UserContext);
  const userActionContext = React.useContext(UserActionContext);
  const toggleDisplay = () => {
    userActionContext.setMessage({ visible: false, type: "default", message: "" });
  };
  return (
    <div className={userContext.message["visible"] ? `DisplayMessage ${userContext.message["type"]}`: `DisplayMessage hide`}>
      <span onClick={toggleDisplay} className="material-icons DisplayMessage-icon">
        close
      </span>
      <p className="DisplayMessage-message">{userContext.message["message"]}</p>
    </div>
  );
}

export default DisplayMessage;
