import React from "react";
import "./PlayerCounter.css";

function PlayerCounter()
{
    return (
      <div className="PlayerCounter">
            <span className="material-icons PlayerCounter-icon">person</span>
            <span className="PlayerCounter-count">0</span>
      </div>
    );
}

export default PlayerCounter;