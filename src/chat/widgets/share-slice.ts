import { createSlice } from "@reduxjs/toolkit";

export type Share = {
  name: string,
  icon: string,
  price: string,
  grow: string
}


type ShareState = {
  
}

const initialState: ShareState = {
  
}

const shareSlice = createSlice({
  name: 'shareSlice',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    
  }
})

export default shareSlice.reducer
export const {  } = shareSlice.actions