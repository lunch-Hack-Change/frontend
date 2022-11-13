import { createSlice } from "@reduxjs/toolkit";

interface MessageData {
  widget?: {
    type: string,
    body: string
  },
}

export interface Message {
  messageId?: string,
  userId?: number,
  dialogId: number,
  text: string,
  messageType: 'TEXT' | 'MEDIA' | 'WIDGET',
  data?: MessageData,
  mediaUrl?: string
}

type ChatState = {
  isOpen: boolean,
  messages: Message[]
}

const initialState: ChatState = {
  isOpen: false,
  messages: [
    {
      messageId: '1',
      userId: 1,
      dialogId: 1,
      messageType: 'TEXT',
      text: 'Sed ut perspiciatis' 
    },
    {
      messageId: '2',
      userId: 100411,
      dialogId: 1,
      messageType: 'MEDIA',
      text: 'perspiciatis ut Sed',
      mediaUrl: 'hello :)'
    }
  ]
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    openChat: (state) => {
      state.isOpen = true
    },
    closeChat: (state) => {
      state.isOpen = false
    }
  },
  extraReducers: (builder) => {
    
  }
})

export default chatSlice.reducer
export const { closeChat, openChat } = chatSlice.actions