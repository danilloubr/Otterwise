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

export const editTask = (id, body) => {
  return client.put(`/${apiCode}/${id}`, body)
};

