import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { getComments } from "../services/postServices";

import { Button } from "@mui/material";

function Comments() {
  const [comment, setComments] = useState([]);

  const { id } = useParams();
  const history = useHistory();

  //   console.log("AQUI", id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const { data: commentsInfo } = await getComments(id)

        setComments(commentsInfo);
        // console.log("COMENTÁRIOS:", commentsInfo);
        // console.log("COMENTÁRIOS2:", comment);
      } catch {
        console.log("Deu erro macho.");
      }
    };
    fetchData();
  }, [id]);

  const goBack = () => {
    history.push(`/posts`);
  };

  //   console.log("AQUI O COMENTE", comment);
  return (
    <div>
      <h1>
        Comentários da Postagem:{" "}
        {Array.from(comment, ({ postId }) => postId).slice(0, 1)}
      </h1>

      {comment.map(({ id, name }) => {
        return (
          <Fragment key={id}>
            <p>{`Cometário ${id}:`}</p>
            <h4>{`${name}`}</h4>
          </Fragment>
        );
      })}
      <Button size="small" variant="outlined" onClick={goBack}>
        Voltar
      </Button>
    </div>
  );
}

export default Comments;
