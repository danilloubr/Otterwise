import { Fragment } from "react";

import "../styles/ModalDeletar.css"

function ModalAdotar() {
  return (
    <Fragment>
      <section className="container-delete">
        <div>
          <h2>"O pet da lista foi adotado? {"<3"}"</h2>
        </div>
        <div className="div-botao-deletar">
          <button>SIM</button>
          <button>NÃO</button>
        </div>
      </section>
    </Fragment>
  );
}

export default ModalAdotar