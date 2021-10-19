import React from "react";
import "./PlayButton.css";

function PlayButton()
{
    return (
      <div className="PlayButton">
        <button className="PlayButton-button" type="button">
                <span className="material-icons PlayButton-icon">play_arrow</span>
                <span className="PlayButton-text">Play</span>
        </button>
      </div>
    );
}

export default PlayButton;