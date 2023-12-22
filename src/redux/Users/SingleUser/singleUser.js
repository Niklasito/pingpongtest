import { createSlice } from '@reduxjs/toolkit'

export const singleUserSlice = createSlice({
  name: 'singleUser',
  initialState: {
    value: null,
  },
  reducers: {
    setSingleUserGames: (state, action) => {
        state.value =  action.payload;
      },
    
  }
})

export const { setSingleUserGames } = singleUserSlice.actions

export default singleUserSlice.reducer