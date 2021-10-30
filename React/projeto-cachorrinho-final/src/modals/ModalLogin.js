import { Fragment } from "react";
import "../styles/LoginModal.css";

import Brandlogologin from "../img/brand-logo-login.png"
import { useHistory } from "react-router";

function LoginModal() {

const history = useHistory()

function goLogin() {
  return history.push("/login")
}

  return (
    <Fragment>
      <section className="formulario-login">
        <form className="caixa-login">
        <div className="logo-login">
         <img src={Brandlogologin} alt="logo"/>
        </div>
          <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required={true}
          />
          <label for="telefone">Senha:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            required={true}
          />

          <button onClick={() => goLogin()}>ENTRAR</button>
        </form>
      </section>
    </Fragment>
  );
}

export default LoginModal;
