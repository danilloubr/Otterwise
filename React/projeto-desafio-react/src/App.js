import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./routes/Home";
import GetTask from "./routes/GetTask";

import Header from "./components/Header";
import PostTask from "./routes/PostTask";
import DeleteTask from "./routes/DeleteTask";

function App() {
  return (
    <Router>
      <Header title="Lista de Tarefas" />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/gettasks">
          <GetTask />
        </Route>
        <Route exact path="/posttasks">
          <PostTask />
        </Route>
        <Route exact path="/deletetask/:id">
          <DeleteTask />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
