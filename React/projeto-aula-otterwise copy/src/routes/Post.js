import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { getPost } from "../services/postServices";

import { Button } from "@mui/material";
import "../styles/postagemId.css";

function Postagem() {
  const [post, setPostagem] = useState({});

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: postInfo } = await getPost(id);

        setPostagem(postInfo);
      } catch {
        console.log("Deu erro macho.");
      }
    };
    fetchData();
  }, [id]);

  const goBack = () => {
    history.push(`/posts`);
  };

  const handleNavigation = (id) => {
    history.push(`/comments/${id}`);
  };

  return (
    <div>
      <h5>
        {post.id} - {post.title}
      </h5>

      <p>{post.body}</p>
      <div className="botoes">
        <Button
          size="small"
          variant="contained"
          onClick={() => {
            handleNavigation(id);
          }}
        >
          Comentários
        </Button>
        <Button size="small" variant="outlined" onClick={goBack}>
          Voltar
        </Button>
      </div>
    </div>
  );
}

export default Postagem;
