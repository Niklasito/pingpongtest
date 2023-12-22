import { configureStore } from '@reduxjs/toolkit'
import allUsersSlice from '../redux/Users/allUsers/allUsersSlice'
import  currentUserSlice  from '../redux/Users/currentUser/currentUser'
import allGamesSlice from '../redux/Games/AllGames/allGames'
import tournamentSlice from '../redux/Tournament/tournamentSlice'
import  singleUserSlice from '../redux/Users/SingleUser/singleUser'
export default configureStore({
  reducer: {
    allUsers: allUsersSlice,
    currentUser: currentUserSlice,
    allGames: allGamesSlice,
    tournament: tournamentSlice,
    singleUser: singleUserSlice,
  }
})