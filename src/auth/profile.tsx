import React, { useEffect } from 'react'
import { ChatPage } from '../chat/chat'
import { useAppDispatch, useAppSelector } from '../common/store'
import { useNavigate } from 'react-router-dom'
import { BottomMenu } from '../shared/bottom-menu'
import { checkUser } from './auth-slice'

export const ProfilePage = () => {
  const { stage } = useAppSelector(state => state.auth)
  const nav = useNavigate()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(checkUser({
      jwt: localStorage.getItem('TOKEN') || ''
    }))
  }, [dispatch])

  useEffect(() => {
    if (!(stage === 'logined' || stage === 'init')) nav('/login')
  }, [stage, nav])

  return (
    <>
      <BottomMenu />
      <ChatPage />
    </>
  )
}