import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./routes/Home";
import GetTask from "./routes/GetTask";

import Nav from "./components/Nav";
import PostTask from "./routes/PostTask";
import EditTask from "./routes/EditTask";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Nav logo="Lista de Tarefas" />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/gettasks/">
          <GetTask />
        </Route>
        <Route path="/posttasks/">
          <PostTask />
        </Route>
        <Route path="/edittasks/:id">
          <EditTask />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
