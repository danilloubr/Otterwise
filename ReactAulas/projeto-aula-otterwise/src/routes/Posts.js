import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

import { getPosts } from "../services/postServices";

import PostComponent from "../components/PostComponent";

import { Button } from "@mui/material";

// import { useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import useAuth from "../hooks/useAuth";



import "../styles/postComponent.css";
import { AuthContext } from "../contexts/AuthContext";

function Posts() {
  const [post, setPost] = useState([]);
  const {logout} = useContext(AuthContext)

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: postsInfo } = await getPosts();

        const queryObj = new URLSearchParams(location.search);
        const userId = Number(queryObj.get("userId"));

        const filteredPosts = userId
          ? postsInfo.filter((post) => post.userId === userId)
          : postsInfo;

        setPost(filteredPosts);
      } catch {
        console.log("Deu erro macho.");
      }
    };
    fetchData();
  }, [location.search]);

  const handleLogout = () => {
    logout()
    localStorage.removeItem("token");
  }

  return (
    <div>
      <h1 className="titulo-h1">Postagens Otterwise</h1>

      <div className="div-principal">
        {post.map(({ id, title }) => {
          return <PostComponent key={id} id={id} title={title} />;
        })}
      </div >
      <div className="div-botao-encerrar">
        <Button variant="outlined" color="error" onClick={handleLogout}> 
          Encerrar Sessão
        </Button>
      </div>
    </div>
  );
}

export default Posts;
