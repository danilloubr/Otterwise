import { Fragment } from "react";

import "../styles/ModalDeletar.css"

function ModalDeletar() {
  return (
    <Fragment>
      <section className="container-delete">
        <div>
          <h2>Certeza de que deseja remover o pet da lista de adoção?</h2>
        </div>
        <div className="div-botao-deletar">
          <button>SIM</button>
          <button>NÃO</button>
        </div>
      </section>
    </Fragment>
  );
}

export default ModalDeletar