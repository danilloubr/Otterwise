import { useForm } from "react-hook-form";
import { login as loginService } from "../services/auth";
import { TextField, Button } from "@mui/material";
import { loginSchema } from "../schemas/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import "../styles/loginForm.css";

function Login() {
  const { login } = useContext(AuthContext);
  const history = useHistory();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const {
        data: { token },
      } = await loginService(data);

      toast.success("Login realizado com sucesso moral!");

      localStorage.setItem("token", token);
      login();
      history.push("/posts");
    } catch (error) {
      toast.error("Deu ruim pra ti, tente novamente.");
      console.log(error);
    }
  };

  return (
    <div className="div-conteiner-login">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          {...register("email")}
        />
        <TextField
          label="Senha"
          variant="outlined"
          type="password"
          {...register("password")}
        />

        <Button variant="contained" type="submit" color="success">
          Logar
        </Button>
      </form>
    </div>
  );
}

export default Login;
