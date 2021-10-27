import "./App.css";
import { ThemeProvider } from "../../contexts/themeContext";
import { UserProvider } from "../../contexts/userContext";
import { QuizProvider } from "../../contexts/quizContext";
import { GameProvider } from "../../contexts/gameContext";
import { PlayerProvider } from "../../contexts/playerContext";
import ProtectedRoute from "./../../components/protect/ProtectedRoute";
import Login from "./../../pages/login/Login";
import Home from "./../../pages/home/Home";
import Editor from "../../pages/editor/Editor";
import Lobby from "../../pages/lobby/Lobby";
import PlayerLogin from "./../../pages/player_login/PlayerLogin";
import PlayerNickname from "../../pages/player_nickname/PlayerNickname";
import GameRoom from "./../../pages/game_room/GameRoom";
import GameCenter from "./../../pages/game_center/GameCenter";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <UserProvider>
          <QuizProvider>
            <GameProvider>
              <PlayerProvider>
                <Switch>
                  <Route exact path="/" component={Login} />
                  <ProtectedRoute exact path="/home" component={Home} />
                  <ProtectedRoute exact path="/editor" component={Editor} />
                  <ProtectedRoute exact path="/lobby" component={Lobby} />
                  <Route exact path="/play" component={PlayerLogin} />
                  <Route exact path="/player_nickname" component={PlayerNickname} />
                  <Route exact path="/game_room" component={GameRoom} />
                  <Route exact path="/game_center" component={GameCenter} />
                </Switch>
              </PlayerProvider>
            </GameProvider>
          </QuizProvider>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
