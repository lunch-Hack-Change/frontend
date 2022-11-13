import { Button, Stack } from '@mui/material'
import { Home as HomeIcon, ChatBubble as ChatBubbleIcon } from '@mui/icons-material'
import React from 'react'
import { useAppDispatch } from '../common/store'
import { openChat } from '../chat/chat-slice'

export const BottomMenu = () => {
  const dispatch = useAppDispatch()

  const chatControl = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(openChat())
  }

  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      alignItems='center'
      sx={{
        position: 'fixed',
        width: '100%',
        bottom: 0,
        p: '10px 20px'
      }}
    >
      <Button><HomeIcon fontSize='large'/></Button>
      <Button onClick={chatControl}><ChatBubbleIcon fontSize='large'/></Button>
    </Stack>
  )
}
