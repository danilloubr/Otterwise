import { useContext} from "react";
import "../styles/LoginModal.css";

import Brandlogologin from "../img/brand-logo-login.png";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { LoginService } from "../services/auth";
// import { Fragment } from "react";
import { AuthContext } from "../contexts/AuthContext";

import {toast} from "react-toastify"

function ModalLogin() {


  const { login } = useContext(AuthContext);
  const history = useHistory();

  // function goLogin() {
  //   return history.push("/login")
  // }
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const {
        data: { token, user },
      } = await LoginService(data);

      toast.success(`Seja Bem Vindo ${user.name}`);

      localStorage.setItem("token", token);
      
      login();
      history.push("/login");
      // console.log("TOKEN=", token);
    } catch (error) {
      toast.error("Senha e/ou email inválidos!");
      // console.log(error);
    }
  };

  return (
    
      <section className="formulario-login">
        <form className="caixa-login" onSubmit={handleSubmit(onSubmit)}>
          <div className="logo-login">
            <img src={Brandlogologin} alt="logo" />
          </div>
          <label htmlFor="email">Email:</label>
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required={true}
          />
          <label htmlFor="telefone">Senha:</label>
          <input
            {...register("password")}
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            required={true}
          />

          <button type="submit" >ENTRAR</button>
        </form>
      </section>
    
  );
}

export default ModalLogin;
