import React from "react";
import "./StartGameButton.css";


function StartGameButton()
{
    return (
        <div className="StartGameButton">
            <button type="button" className="StartGameButton-button">
                <span className="StartGameButton-text">start</span>
            </button>
        </div>
    )
}

export default StartGameButton;