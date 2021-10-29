import { Fragment } from "react";
import "../styles/Form.css"

function Form() {
  return (
    <Fragment>
      <section className="formulario">
        <form method="post" className="caixa">
          <label for="nome">Nome:</label>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Insira seu nome"
            required
          />
          <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Insira seu melhor email"
            required
          />
          <label for="telefone">Telefone:</label>
          <input
            type="number"
            name="telefone"
            id="telefone"
            placeholder="(55) 55555-5555"
            maxlength="11"
            required
          />
          <label for="mensagem">Mensagem:</label>
          <textarea
            name="mensagem"
            className="mensagem"
            cols="10"
            rows="3"
            placeholder="Deixa aqui sua mesagem"
            required
          ></textarea>
          <button type="submit">ENVIAR</button>

          <div className="resultado"></div>
        </form>
      </section>
    </Fragment>
  );
}

export default Form;
