import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./routes/Home";
import GetTask from "./routes/GetTask";

import Header from "./components/Header";
import PostTask from "./routes/PostTask";
import EditTask from "./routes/EditTask";


function App() {
  return (
    <Router>
      <Header title="Lista de Tarefas" />
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
