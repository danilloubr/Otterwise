import client from "../provider/client";

export const login = (body) => {
    return client.post("/login/authenticate", body);
  };