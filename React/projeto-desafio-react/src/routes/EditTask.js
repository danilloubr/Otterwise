// import React, { useState, useEffect } from "react";
import { editTask } from "../services/postServices";
import { TextField, Button } from "@mui/material";
import { useHistory, useParams} from "react-router";

import { toast } from "react-toastify";

import "../styles/editTask.css";
import { useForm } from "react-hook-form";
// import { useEffect } from "react";

function EditTask() {
  // const [post, setPost] = useState();

  const history = useHistory()

  const {id} = useParams()

  // const { id } = useParams()

  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");

 const { register, handleSubmit} = useForm()

 
 const handleEdit = async data => {

try {
     console.log(data)
     const {data: resp} = await editTask(id, data)
     console.log(resp)
     toast("Tarefa editada com sucesso!")
     history.push("/gettasks")
   } catch (error) {
     console.error(error)
     toast.error("EITA, algo deu errado. Preencha o Título e a Descrição!")
     
   }
   
   console.log("DATA AQUI:", data)
 }

  // const onTitle = (e) => setTitle(e.target.value);
  // const onDescription = (e) => setDescription(e.target.value);

  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ;
  



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

  ;

  const goHome = () => {
    history.push("/gettasks")
  }

  return (
    <div className="div-principal">
      <h1 className="titulo-h1">Desafio Final de React - Editando Tarefa</h1>
      <div className="div-secundaria">
    
          <h1>Editar tarefa:</h1>
          <form className="login-form" onSubmit={handleSubmit(handleEdit)}>
            <TextField
              
              {...register("title")}
              label="Título"
              variant="outlined"
              type="text"
              
            />
            <TextField
              
              {...register("description")}
              label="Descrição"
              variant="outlined"
              type="text"
              
            />

            <Button className="botao-edit" type="submit" variant="contained" color="success">
              Editar
            </Button>
            <Button className="botao-edit" type="submit" variant="contained" color="error" onClick={() => goHome()}>
              Cancelar
            </Button>
          </form>
        </div>
      </div>
    
  );
}

export default EditTask;
