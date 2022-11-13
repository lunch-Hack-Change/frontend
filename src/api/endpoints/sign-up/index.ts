import { createApi } from "../../root";

export const postSignUp = (login: string, password: string, name: string, surname: string) => createApi({
  url: '/auth/registration',
  data: {
    login,
    password,
    name,
    surname,
  },
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST',
})