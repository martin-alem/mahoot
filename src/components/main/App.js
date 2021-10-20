import "./App.css";
import Login from "./../../pages/login/Login";
import Home from "./../../pages/home/Home";
import Editor from "../../pages/editor/Editor";
import WaitRoom from "../../pages/wait_room/WaitRoom";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/editor" exact component={Editor} />
        <Route path="/wait_room" exact component={WaitRoom} />
      </Switch>
    </div>
  );
}

export default App;
