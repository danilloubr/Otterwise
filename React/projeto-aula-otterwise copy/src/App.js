import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {ToastContainer } from "react-toastify"

import 'react-toastify/dist/ReactToastify.css';

import Home from "./routes/Home";
import Posts from "./routes/Posts";
import Post from "./routes/Post";
import Comments from "./routes/Comments";
import Login from "./routes/Login";

import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import { AuthContext } from "./contexts/AuthContext";

import useAuth from "./hooks/useAuth";

function App() {
const auth = useAuth()
  console.log("AQUI CARAIU", auth)
  return (

    <AuthContext.Provider value={auth}>
      <ToastContainer/>
      <Router>
        <Header title="Meu Primeiro APP" />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/posts">
            <Posts />
          </PrivateRoute>
          <PrivateRoute path="/posts/:id">
            <Post />
          </PrivateRoute>
          <PrivateRoute path="/comments/:id">
            <Comments />
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
