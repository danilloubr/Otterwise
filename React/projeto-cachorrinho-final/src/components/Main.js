import { Fragment } from "react";
import Galeria from "./Galeria";
import Intro from "./Intro";
import Form from "./Form"
import LoginModal from "./LoginModal";



function Main() {
  return (
    <Fragment>
      <Intro/>
      <Galeria/>
      <Form/>
      <LoginModal/>
    </Fragment>
  );
}

export default Main;
