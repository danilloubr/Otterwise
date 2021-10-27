// import React, { useState, useEffect } from "react";
import { postTask } from "../services/postServices";
import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router";

import { toast } from "react-toastify";

import "../styles/postTask.css";

import { useForm } from "react-hook-form";
// import { useEffect } from "react";

function PostTask() {
  // const [post, setPost] = useState();

  const history = useHistory();

  // const { id } = useParams()

  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const { data: resp } = await postTask(data);
      console.log(resp);
      toast("Tarefa criada com sucesso!");
      history.push("./gettasks");
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao tentar criar sua Tarefa!");
    }

    console.log("DATA AQUI:", data);
  };

  // const onTitle = (e) => setTitle(e.target.value);
  // const onDescription = (e) => setDescription(e.target.value);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(() => {
  //   async function fetchData() {

  //     try {
  //       const postsInfo = await postTask(data);

  //       setPost(postsInfo);
  //       console.log("POST INFO", postsInfo)
  //       ;
  //     } catch {
  //       console.error("Deu erro macho.");
  //     }
  //   }

  //   fetchData();
  //  ;
  // }, [data]);

  // if (!data) return null;

  return (
    <div className="div-principal">
      <h1 className="titulo-h1">Desafio Final de React - Postando Tarefa</h1>
      <div className="div-secundaria">
        <h1>Adicionar Nova Tarefa</h1>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("title")}
            label="Título"
            variant="outlined"
            type="text"
            required
          />
          <TextField
            {...register("description")}
            label="Descrição"
            variant="outlined"
            type="text"
            required
          />
          <div className="botao-post">
            <Button type="submit" variant="contained" color="success">
              Adicionar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostTask;
