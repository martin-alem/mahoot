import React from "react";
import "./PlayerCounter.css";

function PlayerCounter(props) {
  return (
    <div className="PlayerCounter">
      <span className="material-icons PlayerCounter-icon">person</span>
      <span className="PlayerCounter-count">{props.playerCount}</span>
    </div>
  );
}

export default PlayerCounter;
