import React from "react";
import "./DisplayMessage.css";

function DisplayMessage(props) {
  return (
    <div className={props.show.type}>
      <div className="DisplayMessage-header">{props.show.header}</div>
      <p className="DisplayMessage-message">{props.show.message}</p>
    </div>
  );
}

export default DisplayMessage;
