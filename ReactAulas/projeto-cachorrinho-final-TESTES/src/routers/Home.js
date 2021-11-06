import { Fragment } from "react";

import Header from "../components/Header"
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";

function Home() {
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
