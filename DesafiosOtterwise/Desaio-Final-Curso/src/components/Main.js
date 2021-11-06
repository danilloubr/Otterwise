// eslint-disable-next-line
import { Fragment, useState  } from "react";


import Galeria from "./Galeria";
import Intro from "./Intro";
import Form from "./Form";

function Main() {
  /* useState para conseguir levar estados tanto para galeria quanto 
  para Form [sendo assim conseguindo passar de filho para filho as props]*/
  const [levaNome, setLevaNome] = useState("");

  return (
    <Fragment>
      <Intro />
      <Galeria setLevaNome={setLevaNome} />
      <Form levaNome={levaNome} />
    </Fragment>
  );
}

export default Main;
