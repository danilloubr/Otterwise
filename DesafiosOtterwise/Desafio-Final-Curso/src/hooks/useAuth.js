import { useState } from "react";

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token")
  };

  return { isAuthenticated, login, logout };
}
export default useAuth;
