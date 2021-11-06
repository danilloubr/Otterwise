import Modal from "react-modal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { AuthContext } from "./contexts/AuthContext";
import useAuth from "./hooks/useAuth";


import "./styles/Global.css";
import "react-toastify/dist/ReactToastify.css";

import Home from "./routers/Home";
import Login from "./routers/Login";
import LoginId from "./routers/EditPet";
import EditAdopted from "./routers/EditAdopted";

import PrivateRoute from "./components/PrivateRoute";



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
          </Route>
          <Route exact path="/editpet/:id">
            <LoginId />
          </Route>
          <Route exact path="/editadopted/:id">
            <EditAdopted />
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
