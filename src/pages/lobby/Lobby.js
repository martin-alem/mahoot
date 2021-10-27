import React from "react";
import "./Lobby.css";
import PlayerCounter from "./../../components/player_counter/PlayerCounter";
import StartGameButton from "./../../components/start_game_button/StartGameButton";
import EndGameButton from "./../../components/end_game_button/EndGameButton";
import LockGameButton from "./../../components/lock_game_button/LockGameButton";
import { getFromLocalStorage, setToLocalStorage } from "./../../utils/util";
import { GameContext } from "./../../contexts/gameContext";

function Lobby() {
  const gameContext = React.useContext(GameContext);
  const [players, setPlayers] = React.useState([]);
  React.useEffect(() => {
    const quizId = getFromLocalStorage("quizId");
    const socket = new WebSocket(`wss://mahoot-socket-server-yqads.ondigitalocean.app/api/admin`);
    gameContext.setSocket(socket);
    socket.addEventListener("open", (event) => {
      const connectMessage = { type: "create", quizId: quizId };
      socket.send(JSON.stringify(connectMessage));
    });

    socket.addEventListener("message", (event) => {
      const msg = JSON.parse(event.data);
      if (msg.type === "code") {
        setToLocalStorage({ key: "roomId", value: msg.gameCode });
        document.querySelector(".Game-pin").textContent = msg.gameCode;
      } else if (msg.type === "join") {
        setPlayers((prevState) => {
          return [...prevState, { nickname: msg.nickname }];
        });
      }
    });

    socket.addEventListener("close", (event) => {
      console.log("Connection closed");
    });
  }, []);
  return (
    <div className="Lobby">
      <div className="Lobby-header">
        <p>
          Join at <span className="Game-url">mahoot.io/play</span> with Game PIN:
        </p>
        <p className="Game-pin">{getFromLocalStorage("roomId")}</p>
      </div>
      <div className="Lobby-main">
        <div className="Lobby-nav">
          <div className="Lobby-player-counter">
            <PlayerCounter playerCount={players.length} />
          </div>
          <div className="Lobby-action">
            <LockGameButton />
            <StartGameButton />
            <EndGameButton />
          </div>
        </div>
        <div className="Lobby-players">
          <p className="Lobby-waiting">
            {players.length === 0
              ? "Waiting for players..."
              : players.map((player, index) => (
                  <span className="Lobby-player" key={index}>
                    {player.nickname}
                  </span>
                ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Lobby;
