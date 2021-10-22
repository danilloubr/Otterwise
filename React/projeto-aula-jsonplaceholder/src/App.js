import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./routes/Home";
import Posts from "./routes/Posts";
import Post from "./routes/Post";
import Comments from "./routes/Comments";

import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header title="Meu Primeiro APP" />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/posts">
          <Posts />
        </Route>
        <Route path="/posts/:id">
          <Post />
        </Route>
        <Route path="/comments/:id">
          <Comments />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
