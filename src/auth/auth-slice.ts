import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { postAuth } from "../api/endpoints/auth";
import { getUserInfo } from "../api/endpoints/user";
import { sha256 } from 'js-sha256'

export interface User {
  userId: number,
  role: 'OPERATOR' | 'CLIENT',
  name: string,
  surname: string,
}

type AuthFormFields = {
  login: string,
  password: string,
}

type RegFormFields = {
  name: string,
  surname: string,
  login: string,
  password: string,
  dblPassword: string,
}

type AuthState = {
  user?: User,
  auth: AuthFormFields,
  registration: RegFormFields,
  stage: 'auth' | 'logined' | 'init' | 'pending',
}

const initialState: AuthState = {
  auth: {
    login: '',
    password: '',
  },
  registration: {
    name: '',
    surname: '',
    login: '',
    password: '',
    dblPassword: '',
  },
  stage: 'init'
}

type ChangeActionPayload = PayloadAction<{
  field: 'login' | 'password',
  value: string
}>
type ChangeRegFormPayload = PayloadAction<{
  field: 'login' | 'password' | 'name' | 'surname' | 'dblPassword',
  value: string
}>

export const authUser = createAsyncThunk(
  'authSlice/authUser',
  async ({
    login, 
    password
  }: AuthFormFields, { dispatch }) => {
    const tryAuth = await postAuth(login, sha256(password))
    const authData: {
      jwtToken: string,
      userId: number,
      login: string,
      role: string,
    } = await tryAuth.json()

    const getUser = await getUserInfo(authData.jwtToken, authData.userId)
    const data = await getUser.json()

    localStorage.setItem('TOKEN', authData.jwtToken)
    data.userId = authData.userId

    return data
  }
)

export const checkUser = createAsyncThunk(
  'authSlice/checkUser',
  async ({ jwt }: { jwt: string }) => {
    const getUser = await getUserInfo(jwt)
    const data = await getUser.json()

    return data
  }
)

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    changeAuthForm: (state, action: ChangeActionPayload) => {
      const { field, value } = action.payload

      switch (field) {
        case 'login':
          state.auth.login = value
          break
        case 'password':
          state.auth.password = value
          break
      }
    },
    changeRegForm: (state, action: ChangeRegFormPayload) => {
      const { field, value } = action.payload

      switch (field) {
        case 'login':
          state.registration.login = value
          break
        case 'password':
          state.registration.password = value
          break
        case 'name':
          state.registration.name = value
          break
        case 'surname':
          state.registration.surname = value
          break
        case 'dblPassword':
          state.registration.dblPassword = value
          break
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authUser.fulfilled, (state, action) => {
      state.stage = 'logined'
      state.user = action.payload
    })
    builder.addCase(authUser.rejected, (state, action) => {
      state.stage = 'auth'
      state.auth = { ...initialState.auth }
    })
    builder.addCase(checkUser.fulfilled, (state, action) => {
      state.stage = 'logined'
      state.user = action.payload
    })
    builder.addCase(checkUser.rejected, (state, action) => {
      state.stage = 'auth'
      state.auth = { ...initialState.auth }
    })
  }
})

export default authSlice.reducer
export const { changeAuthForm, changeRegForm } = authSlice.actions
