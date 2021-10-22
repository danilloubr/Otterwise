import client from "../provider/client";

export const getPosts = () => {
  return client.get("/posts");
};

export const getPost = (id) => {
  return client.get(`/posts/${id}`);
};

export const getComments = (id) => {
  return client.get(`/comments?postId=${id}`);
};
