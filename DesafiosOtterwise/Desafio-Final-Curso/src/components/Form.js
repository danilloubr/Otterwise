import { Fragment, useEffect } from "react";
import { postContact } from "../services/postServices";

import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import "../styles/Form.css";


/*props levaNome vindo da Main*/
function Form({ levaNome }) {
  /* useForm para conseguir capturar os valores vindo do formulário e 
  conseguir enviar para API*/
  const { register, handleSubmit, setValue } = useForm();

  /*useEffect para conseguir colocar o valor da props dentro do campo "message" do
  fomulário */
  useEffect(() => {
    setValue("message", levaNome);
  }, [setValue, levaNome]);

  /* funcão para postar o formulário */
  const onSubmit = async (data) => {
    try {
      const { data: resp } = await postContact(data);
      console.log(resp);
      toast.success("Formulário enviado com sucesso!");
    } catch (error) {
      toast.error("Ocorreu um erro ao tentar enviar seu formulário!");
    }
  };

  /* formulário de contato */
  return (
    <Fragment>
      <div className="contato">
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
