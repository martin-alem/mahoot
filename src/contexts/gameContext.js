import React from "react";

const GameContext = React.createContext();

function GameProvider(props) {
  const [socket, setSocket] = React.useState(null);

  return <GameContext.Provider value={{socket, setSocket}}>{props.children}</GameContext.Provider>;
}

export { GameContext, GameProvider};
