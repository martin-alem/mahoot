import React from "react";
import "./PlayerNickname.css";
import Logo from "./../../components/logo/Logo";
import { getFromLocalStorage, setToLocalStorage } from "./../../utils/util";
import { Redirect } from "react-router";
import { PlayerContext } from "./../../contexts/playerContext";

function PlayerNickname() {
  const playerContext = React.useContext(PlayerContext);
  const [hasEntered, setHasEntered] = React.useState(false);
  const [nickname, setNickname] = React.useState("");
  const handleChange = (e) => {
    setNickname(e.target.value);
  };

  const enterGame = () => {
    const pinValue = getFromLocalStorage("roomId");
    const socket = playerContext.playerSocket;
    if (pinValue !== "") {
      const joinMessage = {
        type: "enter",
        roomId: pinValue,
        nickname: nickname,
      };
      socket.send(JSON.stringify(joinMessage));

      socket.addEventListener("message", (event) => {
        const msg = JSON.parse(event.data);
        if (msg.type === "roomId") {
          setToLocalStorage({ key: "nickname", value: nickname });
          setHasEntered(true);
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
  return hasEntered ? (
    <Redirect to="/game_room" />
  ) : (
    <div className="PlayerNickname">
      <Logo />
      <div className="PlayerNickname-login">
        <input onChange={handleChange} type="text" name="pin" value={nickname} className="PlayerNickname-input" placeholder="Enter Nickname" />
        <button onClick={enterGame} className="PlayerNickname-submit" type="button">
          Ok, go
        </button>
      </div>
    </div>
  );
}

export default PlayerNickname;
