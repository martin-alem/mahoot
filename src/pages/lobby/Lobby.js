import React from "react";
import "./Lobby.css";
import PlayerCounter from "./../../components/player_counter/PlayerCounter";
import StartGameButton from "./../../components/start_game_button/StartGameButton";
import EndGameButton from "./../../components/end_game_button/EndGameButton";
import LockGameButton from "./../../components/lock_game_button/LockGameButton";

function Lobby(props)
{
  return (
    <div className="Lobby">
      <div className="Lobby-header">
        <p>
          Join at <span className="Game-url">mahoot.io/play</span> with Game PIN:
        </p>
        <p className="Game-pin">658 653 458</p>
      </div>
      <div className="Lobby-main">
        <div className="Lobby-nav">
          <div className="Lobby-player-counter">
            <PlayerCounter />
          </div>
          <div className="Lobby-action">
            <LockGameButton />
            <StartGameButton />
            <EndGameButton />
          </div>
        </div>
        <div className="Lobby-players">
          <p className="Lobby-waiting">Waiting for players...</p>
        </div>
      </div>
    </div>
  );
}

export default Lobby;
