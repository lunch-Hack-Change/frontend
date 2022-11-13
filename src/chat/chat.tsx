import React, { useEffect } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../common/store'
import { Stack } from '@mui/system'
import { Close as CloseIcon } from '@mui/icons-material'
import { closeChat } from './chat-slice'
import AdvisoryIcon from '../assets/logo.svg'
import { MessageBox } from './message'

const ChatHeader = () => {
  const dispatch = useAppDispatch()

  const close = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(closeChat())
  }

  return (
    <DialogTitle sx={{borderBottom: '1px solid grey'}}>
        <Stack 
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          
        >
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            spacing={2}
          >
            <img src={AdvisoryIcon} height='40px' width='40px' alt="logo64"/>
            <Typography variant="h6">Поддержка</Typography>
          </Stack>
          <Button onClick={close}><CloseIcon fontSize='large'/></Button>
        </Stack>
      </DialogTitle>
  )
}

const ChatBody = () => {
  const { messages } = useAppSelector(state => state.chat)

  return (
    <DialogContent>
      <Stack
        direction='column'
        justifyContent='flex-end'
        height='100%'
        spacing={3}
      >
        {
          messages.map((msg, idx) => <MessageBox msg={msg} key={msg.messageId || idx}/>)
        }
      </Stack>
    </DialogContent>
  )
}

export const ChatPage = () => {
  const { isOpen } = useAppSelector(state => state.chat)

  useEffect(() => {
    //init ws here
  }, [])

  return (
    <Dialog open={isOpen} fullScreen scroll='paper'>
      <ChatHeader />
      <ChatBody />

      <DialogActions >

      </DialogActions>
    </Dialog>
  )
}
