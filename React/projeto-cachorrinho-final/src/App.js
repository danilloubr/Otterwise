import Modal from "react-modal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/Global.css";

import Home from "./routers/Home";
import Login from "./routers/Login";

Modal.setAppElement("#root");

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route path="/login">
          <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
