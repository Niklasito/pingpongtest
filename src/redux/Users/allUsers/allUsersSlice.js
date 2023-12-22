import { createSlice } from '@reduxjs/toolkit'

export const allUsersSlice = createSlice({
  name: 'allUsers',
  initialState: {
    value: null
  },
  reducers: {
    setAllUsers: (state, action) => {
      state.value = action.payload
    },
    updateUser: (state, action) => {
      
      const { id, points } = action.payload;
       state.value = state.value.map((user) =>
       user.id === id ? { ...user, points } : user
        );
    },
  }
})

export const { setAllUsers,updateUser } = allUsersSlice.actions

export default allUsersSlice.reducer