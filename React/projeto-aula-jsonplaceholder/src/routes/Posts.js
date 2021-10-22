import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { getPosts } from "../services/postServices";

import PostComponent from "../components/PostComponent";

import "../styles/postComponent.css";

function Posts() {
  const [post, setPost] = useState([]);

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

  return (
    <div>
      <h1 className="titulo-h1">Postagens JsonPlaceHolder</h1>
      <div className="div-principal">
        {post.map(({ id, title }) => {
          return <PostComponent key={id} id={id} title={title} />;
        })}
      </div>
    </div>
  );
}

export default Posts;
