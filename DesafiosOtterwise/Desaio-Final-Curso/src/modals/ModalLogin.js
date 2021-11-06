import { useContext } from "react";

import Brandlogologin from "../img/brand-logo-login.png";

import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { LoginService } from "../services/auth";
import { AuthContext } from "../contexts/AuthContext";

import { toast } from "react-toastify";

import "../styles/LoginModal.css";

function ModalLogin() {

  /* contexto para*/
  const { login } = useContext(AuthContext);

  /*useHistory para mandar o usuário para determinado url.*/
  const history = useHistory();

  /*useForm para pegar dados dos campos de login*/
  const { register, handleSubmit } = useForm();

/*função para fazer login*/
  const onSubmit = async (data) => {
    try {
      const {
        data: { token, user },
      } = await LoginService(data);

      toast.success(`Seja Bem Vindo ${user.name}`);

      localStorage.setItem("token", token);

      login();
      history.push("/login");
    } catch (error) {
      toast.error("Senha e/ou email inválidos!");
    }
  };

  /*formulário de login*/
  return (
    <section className="formulario-login">
      <form className="caixa-login" onSubmit={handleSubmit(onSubmit)}>
        <div className="logo-login">
          <img src={Brandlogologin} alt="logo" />
        </div>
        <label htmlFor="email" className="email">
          Email:
        </label>
        <input
          {...register("email")}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required={true}
        />
        <label htmlFor="password">Senha:</label>
        <input
          {...register("password")}
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
          required={true}
        />

        <button type="submit">ENTRAR</button>
      </form>
    </section>
  );
}

export default ModalLogin;
