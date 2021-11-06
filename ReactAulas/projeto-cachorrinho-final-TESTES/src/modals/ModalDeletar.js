import { Fragment, useState, useEffect } from "react";
import { deletePets, getPets } from "../services/postServices";
import { toast } from "react-toastify";

import "../styles/ModalDeletar.css";

function ModalDeletar({ handleCloseModalDeletar, id }) {

  console.log("ID AQUI:", id);
 
 
  const handleDelete = async () => {
    try {
      const { data: resp } = await deletePets(id);
      console.log("PETS DELE", resp);

      toast.success("Pet excluído da adoção!");
      handleCloseModalDeletar();
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro ao deletar o seu pet!");
    }
  };

  return (
    <Fragment>
      <section className="container-delete">
        <div>
          <h2>Certeza de que deseja remover o pet da lista de adoção?</h2>
        </div>
        <div className="div-botao-deletar">
          <button
            onClick={() => {
              handleDelete();
            }}
          >
            SIM
          </button>
          <button onClick={() => handleCloseModalDeletar()}>NÃO</button>
        </div>
      </section>
    </Fragment>
  );
}

export default ModalDeletar;
