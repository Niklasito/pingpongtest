import { createSlice } from '@reduxjs/toolkit'

export const allGamesSlice = createSlice({
  name: 'allGames',
  initialState: {
    value: [],
    finished: []
  },
  reducers: {
    setAllGames: (state, action) => {
      state.value =  action.payload;
    },
    setNewGame: (state, action) => {
      state.value = [action.payload, ...state.value];
    },
    updateGame: (state, action) => {
        const { id, updatedFields } = action.payload;
      
        state.value = state.value.map((game) => {
          if (game.id === id) {
            return {
              ...game,
              ...updatedFields,
            };
          }
          return game;
      });
    },
    setAllFinsihedGames:(state, action) => {
      state.finished = [action.payload, ...state.finished];
    }
    
  }
})

export const { setAllGames, updateGame, setNewGame, setAllFinsihedGames } = allGamesSlice.actions

export default allGamesSlice.reducer