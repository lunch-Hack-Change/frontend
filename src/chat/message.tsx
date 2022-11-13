import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../common/store'
import { Message as MessageType } from './chat-slice'
import AdvisoryIcon from '../assets/logo.svg'

type MessageProps = {
  msg: MessageType
}

export const MessageBox: React.FC<MessageProps> = ({ msg }) => {
  const { user } = useAppSelector(state => state.auth)

  const isUser = user?.userId === msg.userId

  if (!isUser) {
    return ( 
      <Stack direction='column' spacing={0} maxWidth={164}>
        <Stack
          direction='row'
          alignItems='center'
          spacing={1}
        >
          <img src={AdvisoryIcon} height='24px' width='24px' alt="logo64"/>
          <Typography variant="subtitle2" fontSize='14px'>Поддержка</Typography>
        </Stack>
        <Box sx={{
          backgroundColor: 'rgba(0,0,0,0.06)',
          p: '12px 16px',
          borderRadius: 8,
        }}>
          <Typography variant="body1">{msg.text}</Typography>
        </Box>
      </Stack>
    )
  }

  return (
    <Box maxWidth={164} color="primary" sx={{
      backgroundColor: '#65B7E8',
      color: 'white',
      p: '12px 16px',
      borderRadius: 8,
      alignSelf: 'flex-end'
    }}>
      <Typography variant="body1">{msg.text}</Typography>
    </Box>
  )
}
