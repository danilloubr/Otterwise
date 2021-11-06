import { Fragment } from "react";
import { postContact } from "../services/postServices";
import "../styles/Form.css";

import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const { data: resp } = await postContact(data);
      console.log("RESPOSTA EMAIL", resp);
      toast.success("Formulário enviado com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao tentar enviar seu formulário!");
    }

    console.log("DATA AQUI:", data);
  };

  return (
    <Fragment >
      <div className="contato" id="contato" name="contato">
        <form className="caixa" onSubmit={handleSubmit(onSubmit)}>
          <label className="label-form" htmlFor="nome">
            Nome:
          </label>
          <input
            className="input-form"
            {...register("name")}
            type="text"
            id="nome"
            placeholder="Insira seu nome"
          />
          <label className="label-form" htmlFor="email">
            Email:
          </label>
          <input
            className="input-form"
            {...register("email")}
            type="text"
            id="email"
          />
          <label className="label-form" htmlFor="telefone">
            Telefone:
          </label>
          <input
            className="input-form"
            {...register("phone")}
            type="number"
            id="telefone"
            placeholder="(55) 55555-5555"
          />
          <label className="label-form" htmlFor="mensagem">
            Mensagem:
          </label>
          <textarea
            {...register("message")}
            className="mensagem"
            cols="10"
            rows="3"
            placeholder="Deixa aqui sua mesagem"
          ></textarea>
          <button className="button-form" type="submit">
            ENVIAR
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default Form;
