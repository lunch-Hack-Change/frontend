import { createApi } from "../../root";

export const getUserInfo = (jwt: string, uid?: number) => createApi({
  url: 'user/info',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + jwt
  },
  method: 'GET',
  params: {
    userId: uid?.toString() || ''
  }
})
