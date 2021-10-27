import React, { useState, useEffect } from "react";
import { Fragment } from "react";

// import { useParams } from "react-router";

import { useHistory } from "react-router-dom";

import { deleteTask, getTask} from "../services/postServices";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "../styles/postComponent.css";

function GetTask() {
  const [post, setPost] = useState();

  const history = useHistory();

  const handleNavigation = (id) => {
    history.push(`/edittasks/${id}`);
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
      alert("Post deletado com sucesso!!!");
      setPost(resp);
    } catch (error) {
      console.log(error);
      alert("Post não foi deletado!!!");
    }
  };
  console.log("POST AQUI", post);

  

  

  return (
    <div>
      <h1 className="titulo-h1">Desafio React - Lista de Tarefas</h1>

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
                    onClick={() => {
                      handleDelete(id);
                    }}
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
            </Fragment>
          );
        })}
      </div>
      <div className="botao">
        <Button variant="contained" onClick={handleForm} color="success">
          {" "}
          Adicionar Nova Tarefa
        </Button>
      </div>
    </div>
  );
}

export default GetTask;
