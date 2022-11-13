import { useAppDispatch, useAppSelector } from "../common/store";
import { AppForm, FormElement } from "../shared/app-form";
import { changeRegForm } from "./auth-slice";

export const Registration = () => {
  const reg = useAppSelector(state => state.auth.auth)
  const dispatch = useAppDispatch()

  const regActors: FormElement<string>[] = [
    {
      title: 'Имя',
      onChange: value => dispatch(changeRegForm({field: 'name', value})),
      placeholder: 'Иван'
    },
    {
      title: 'Фамилия',
      onChange: value => dispatch(changeRegForm({field: 'surname', value})),
      placeholder: 'Иванов'
    },
    {
      title: 'Логин',
      onChange: value => dispatch(changeRegForm({field: 'login', value})),
      placeholder: 'Введите ваш никнейм'
    },
    {
      title: 'Пароль',
      type: 'password',
      onChange: value => dispatch(changeRegForm({field: 'password', value})),
      placeholder: '******'
    },
    {
      title: 'Повторите пароль',
      onChange: value => dispatch(changeRegForm({field: 'dblPassword', value})),
      placeholder: '******',
      type: 'password'
    },
  ]
  return (
    <AppForm form={{
      actors: regActors, 
      isValid: true, 
      submitText: 'Зарегистрироваться',
      onSubmit: (e) => {}
    }} height='620px'
       title='Создать аккаунт'
       size='small'
    />
  )
};