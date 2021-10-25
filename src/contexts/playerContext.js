import React from "react";

const PlayerContext = React.createContext();

function PlayerProvider(props) {
  const [playerSocket, setPlayerSocket] = React.useState(null);

  return <PlayerContext.Provider value={{playerSocket, setPlayerSocket}}>{props.children}</PlayerContext.Provider>;
}

export { PlayerContext, PlayerProvider};
