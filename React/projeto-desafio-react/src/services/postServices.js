import client from "../provider/client";

const apiCode = "02kf0t9"

export const getTask = () => {
  return client.get(`/${apiCode}`);
};

export const postTask = (body) => {
  return client.post(`/${apiCode}`, body)
};

export const deleteTask = (id) => {
  return client.delete(`/${apiCode}/${id}`)
};

export const getPost = (id) => {
  return client.get(`/posts/${id}`);
};

export const getComments = (id) => {
  return client.get(`/comments?postId=${id}`);
};
