import { createApi } from "../../root";

export const postAuth = (login: string, password: string) => createApi({
  url: 'auth',
  data: {
    login,
    password,
  },
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST',
})