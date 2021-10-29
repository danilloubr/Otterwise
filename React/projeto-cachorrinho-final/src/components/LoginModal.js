import { Fragment } from "react";
import "../styles/LoginModal.css";

import Brandlogologin from "../img/brand-logo-login.png"

function LoginModal() {
  return (
    <Fragment>
      <section className="formulario-login">
        <form method="post" className="caixa-login">
        <div className="logo-login">
         <img src={Brandlogologin}></img>
        </div>
          <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <label for="telefone">Senha:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            required
          />

          <button type="submit">ENTRAR</button>
        </form>
      </section>
    </Fragment>
  );
}

export default LoginModal;
