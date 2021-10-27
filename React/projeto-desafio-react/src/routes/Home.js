import React from "react";

import Footer from "../components/Footer";
import Main from "../components/Main";
import Button from "@mui/material/Button";

import { useHistory } from "react-router-dom";
import "../styles/postComponent.css";




function Home() {
  
  const history = useHistory();

  const handleForm = () => {
    history.push("/posttasks");
  };


  return (
    <div>
      <Main />
      <div className="botao">
        <Button variant="contained" onClick={handleForm} color="success">
          {" "}
          Adicionar Nova Tarefa
        </Button>
      </div>
      <Footer author="Desenvolvido por Danilo S." />
    </div>
  );
}

export default Home;
