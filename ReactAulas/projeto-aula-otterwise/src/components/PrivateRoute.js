import { Redirect, Route } from "react-router";

import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

function PrivateRoute({ children, ...rest }) {
  const {isAuthenticated} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() => (isAuthenticated ? children : <Redirect to="/login" />)}
    />
  );
}

export default PrivateRoute;
