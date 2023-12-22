import { createSlice } from '@reduxjs/toolkit'

export const tournamentSlice = createSlice({
name: 'tournament',
initialState: {
    value: "",
    start: false,
    pickedPlayers: [],
    playersLeft: [],
    playersRight: [],
    final: [],
    winner: null,
    losers: []
},
reducers: {
    setTournamentPlayers: (state, action) => {
    state.value = action.payload;
    },
    setPickedPlayers: (state, action) => {
    state.pickedPlayers = [...state.pickedPlayers, action.payload];
    },
    setAdminPlayer: (state, action) => {
        state.pickedPlayers = action.payload;
        },
    removePickedPlayers: (state, action) => {
        state.pickedPlayers = action.payload;
    },
    setPlayersLeft: (state, action) => {
    state.playersLeft =  action.payload;
    },
    removePlayersLeft: (state, action) => {
    state.playersLeft =  action.payload;
        },
    setPlayersRight: (state, action) => {
    state.playersRight =  action.payload;
    },
    removePlayersRight: (state, action) => {
        state.playersRight  =  action.payload;
        },
    setStart: (state, action) => {
    state.start = action.payload;
    },
    setFinal: (state, action) => {
    state.final = [...state.final, action.payload];
    },
    removeFinal: (state, action) => {
        state.final  =  action.payload;
        },
    setWinner: (state, action)=>{
        state.winner = action.payload;
    },
    setLoser: (state, action) => {
        state.losers = [...state.losers, action.payload];
    },
    removeLoser: (state, action) => {
        state.losers  =  action.payload;
    }
},
});

export const { setTournamentPlayers,setStart, setPickedPlayers, setPlayersLeft, 
    setPlayersRight, setFinal, setWinner, removePickedPlayers,
    removePlayersLeft, removePlayersRight, removeFinal, setLoser, removeLoser, setAdminPlayer

} = tournamentSlice.actions

export default tournamentSlice.reducer