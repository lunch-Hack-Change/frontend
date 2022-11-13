import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../common/store";
import { AppForm, FormElement } from "../shared/app-form";
import { authUser, changeAuthForm } from "./auth-slice";
import { Link, useNavigate } from 'react-router-dom'



export const Auth = () => {
  const {auth, stage} = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const nav = useNavigate()

  useEffect(() => {
    if (stage === 'logined') nav('/')
  }, [stage, nav])

  const authActors: FormElement<string>[] = [
    {
      title: 'Логин',
      onChange: value => dispatch(changeAuthForm({field: 'login', value})),
      placeholder: 'Введите логин'
    },
    {
      title: 'Пароль',
      onChange: value => dispatch(changeAuthForm({field: 'password', value})),
      placeholder: 'Введите пароль',
      type: 'password'
    }
  ]

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(authUser(auth))
  }

  return (
    <AppForm 
      form={{
        actors: authActors, 
        isValid: true, 
        submitText: 'Войти',
        onSubmit
      }} 
      blockAfter={
        <Stack direction="row" justifyContent={"space-between"}>
          <Typography>Нет аккаунта?</Typography>
          <Link to='/sign-up'>Зарегистрируйся</Link>
        </Stack>
      }  
      height={'500px'}
      title={'Вход'}
    />
  )
};