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
          <Route path="/" exact component={Login} />
          <ProtectedRoute path="/home" exact component={Home} />
          <ProtectedRoute path="/editor" exact component={Editor} />
          <ProtectedRoute path="/wait_room" exact component={WaitRoom} />
        </Switch>
        </QuizProvider>
      </UserProvider>
    </div>
  );
}

export default App;
