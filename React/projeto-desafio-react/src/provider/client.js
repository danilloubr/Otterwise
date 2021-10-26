import axios from "axios";

const client = axios.create({
  baseURL: "https://otterwise-fake-api.herokuapp.com/tasks",
});

export default client;
