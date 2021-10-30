import { Fragment } from "react";
import "../styles/Form.css"

function Form() {
  return (
    <Fragment>
      <section className="formulario">
        <form method="post" className="caixa">
          <label className="label-form" for="nome">Nome:</label>
          <input className="input-form"
            type="text"
            name="nome"
            id="nome"
            placeholder="Insira seu nome"
            required
          />
          <label className="label-form" for="email">Email:</label>
          <input className="input-form"
            type="email"
            name="email"
            id="email"
            placeholder="Insira seu melhor email"
            required
          />
          <label className="label-form" for="telefone">Telefone:</label>
          <input className="input-form"
            type="number"
            name="telefone"
            id="telefone"
            placeholder="(55) 55555-5555"
            maxlength="11"
            required
          />
          <label className="label-form" for="mensagem">Mensagem:</label>
          <textarea
            name="mensagem"
            className="mensagem"
            cols="10"
            rows="3"
            placeholder="Deixa aqui sua mesagem"
            required
          ></textarea>
          <button className="button-form" type="submit">ENVIAR</button>

          <div className="resultado"></div>
        </form>
      </section>
    </Fragment>
  );
}

export default Form;
