import { Redirect, Route } from "react-router";

import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";


/* Private router para so liberar o acesso a rota expecífica se o usuário
estiver autenticado */
function PrivateRoute({ children, ...rest }) {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() => (isAuthenticated ? children : <Redirect to="/" />)}
    />
  );
}

export default PrivateRoute;
