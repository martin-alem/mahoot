import React from "react";
import "./PlayerLogin.css";
import Logo from "./../../components/logo/Logo";
import { Redirect } from "react-router-dom";
import { setToLocalStorage } from "./../../utils/util";
import { PlayerContext } from "./../../contexts/playerContext";

function PlayerLogin() {
  const playerContext = React.useContext(PlayerContext);
  const [pinValue, setPinValue] = React.useState("");
  const [hasJoined, setHasJoined] = React.useState(false);
  const handleChange = (e) => {
    setPinValue(e.target.value);
  };
  const joinGame = () => {
    if (pinValue !== "") {
      const socket = new WebSocket("ws://localhost:8080/api/play");
      socket.addEventListener("open", (event) => {
        playerContext.setPlayerSocket(socket);
        const joinMessage = {
          type: "join",
          roomId: pinValue,
        };
        socket.send(JSON.stringify(joinMessage));
      });

      socket.addEventListener("message", (event) => {
        const msg = JSON.parse(event.data);
        if (msg.type === "roomId") {
          setToLocalStorage({ key: "roomId", value: msg.roomId });
          setHasJoined(true);
        } else if (msg.type === "error") {
          console.log(msg.msg);
        }
      });

      socket.addEventListener("close", (event) => {
        console.log("Connection closed");
      });
    } else {
      console.log("you need a pin");
    }
  };
  return hasJoined ? (
    <Redirect to="/player_nickname" />
  ) : (
    <div className="PlayerLogin">
      <Logo />
      <div className="PlayerLogin-login">
        <input onChange={handleChange} type="text" name="pin" value={pinValue} className="PlayerLogin-input" placeholder="Enter Game PIN" />
        <button onClick={joinGame} className="PlayerLogin-submit" type="button">
          Enter
        </button>
      </div>
    </div>
  );
}

export default PlayerLogin;
