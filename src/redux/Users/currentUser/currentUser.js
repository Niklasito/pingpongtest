import { createSlice } from '@reduxjs/toolkit'

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: {
    value: null,
    current: false,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.value = action.payload
    },
    setCurrent: (state, action) => {
      state.current = action.payload
    }
    
  }
})

export const { setCurrentUser, setCurrent } = currentUserSlice.actions

export default currentUserSlice.reducer