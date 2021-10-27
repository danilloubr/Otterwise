import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { toast } from "react-toastify";

// import { useParams } from "react-router";

import { useHistory } from "react-router-dom";

import { deleteTask, getTask } from "../services/postServices";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "../styles/postComponent.css";



import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


function GetTask() {
  const [post, setPost] = useState();
  const [open, setOpen] = useState(false);

  const history = useHistory();

  const handleNavigation = (id) => {
    history.push(`/edittasks/${id}`);
  };

  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: postsInfo } = await getTask();
        const { tasks } = postsInfo;
        console.log("Console TASKS", tasks);
        setPost(tasks);
      } catch {
        console.log("Deu erro macho.");
      }
    };

    fetchData();
  }, []);
  if (!post) return null;

  const handleForm = () => {
    history.push("/posttasks");
  };

  const handleDelete = async (id) => {
    try {
      const { data: resp } = await deleteTask(id);
      console.log("RESP", resp);
      handleClose()
      toast("Ei, nem gostava daquela tarefa também ;)") ;
      setPost(resp);
    } catch (error) {
      console.log(error);
      toast.success("Ocorreu um erro ao deletar a tarefa!");
    }
  };
  console.log("POST AQUI", post);

  return (
    <div>
      <h1 className="titulo-h1">Desafio React - Lista de Tarefas</h1>
      <div className="botao">
        <Button variant="contained" onClick={handleForm} color="success">
          {" "}
          Adicionar Nova Tarefa
        </Button>
      </div>
      <div className="div-principal">
        {post.map(({ id, title, description }) => {
          return (
            <Fragment key={id}>
              <Card className="card" sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Tarefa:
                  </Typography>
                  <Typography variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    descrição:
                  </Typography>
                  <Typography variant="body2">{description}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={handleClickOpen}
                    type="submit"
                  >
                    Deletar
                  </Button>
                  <Button
                    size="small"
                    onClick={() => {
                      handleNavigation(id);
                    }}
                  >
                    Editar
                  </Button>
                </CardActions>
              </Card>

              <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>
                  {"Eae, tudo bem? Tem certeza que deseja excluir essa tarefa?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    Espero que saiba o que está fazendo, depois de
                    clicar em Deletar não terá mais volta.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancelar</Button>
                  <Button
                    onClick={() => {
                      handleDelete(id);
                    }}
                  >
                    Deletar
                  </Button>
                </DialogActions>
              </Dialog>
            </Fragment>
          );
        })}
      </div>
 
    </div>
  );
}

export default GetTask;
