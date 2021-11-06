import { Fragment, useEffect, useContext } from "react";

import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";

import { AuthContext } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function Home() {

  
  const history = useHistory();

  const { login, logout } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      login();
      history.push("/login");
    } else {
      logout();
      history.push("/");
    }
  }, [login, history, logout]);

  return (
    <Fragment>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default Home;
