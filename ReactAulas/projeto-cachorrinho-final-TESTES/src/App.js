import Modal from "react-modal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/Global.css";

import Home from "./routers/Home";
import Login from "./routers/Login";

import PrivateRoute from "./components/PrivateRoute";
import { AuthContext } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useAuth from "./hooks/useAuth";
// import LoginId from "./routers/LoginId";


Modal.setAppElement("#root");



function App() {
  
  const auth = useAuth(AuthContext);

  console.log(auth)
  

  return (
    <AuthContext.Provider value={auth}>
      <ToastContainer />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          {/* </Route>
          <Route exact path="/login/:id">
            <LoginId /> */}
          </Route>
          <PrivateRoute path="/login">
            <Login />
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
