import client from "../providers/client"

export const LoginService = (body) => {
    return client.post("/login/authenticate", body);
  };