import client from "../providers/client"

const apiCode = "02kf0t9"

export const getPets = () => {
  return client.get(`/pets/${apiCode}`);
};

export const postPets = (body) => {
  return client.post(`/pets/${apiCode}`, body)
};

export const deletePets= (id) => {
  return client.delete(`/pets/${apiCode}/${id}`)
};

export const editPet = (id, body) => {
  return client.put(`/pets/${apiCode}/${id}`, body)
};

export const getPetId = (id) => {
  return client.get(`/pets/${apiCode}/${id}`);
};

export const postContact = (data) => {
  return client.post(`/contact`, data);
};

