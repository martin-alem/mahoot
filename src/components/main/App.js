import "./App.css";
import { UserProvider } from "../../contexts/userContext";
import { QuizProvider } from "../../contexts/quizContext";
import ProtectedRoute from "./../../components/protect/ProtectedRoute";
import Login from "./../../pages/login/Login";
import Home from "./../../pages/home/Home";
import Editor from "../../pages/editor/Editor";
import WaitRoom from "../../pages/wait_room/WaitRoom";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <QuizProvider>
          <Switch>
            <Route exact path="/" component={Login} />
            <ProtectedRoute exact path="/home" component={Home} />
            <ProtectedRoute exact path="/editor" component={Editor} />
            <ProtectedRoute exact path="/wait_room" component={WaitRoom} />
          </Switch>
        </QuizProvider>
      </UserProvider>
    </div>
  );
}

export default App;
