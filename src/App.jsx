import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./Screens/DashboardScreen/Dashboard";
import StartScreen from "./Screens/StartScreen/StartScreen";
import RegularMatch from "./Screens/RegularMatch/RegularMatch";
import "./scss/style.css";
import Tournament from "./Screens/TournamentScreen/Tournament";
import ScoreBoard from "./Screens/ScoreBoardScreen/ScoreBoard";
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { auth, addNewUser, emailQuery} from './config/firebase';
import { setCurrentUser } from "./redux/Users/currentUser/currentUser";
import { useSelector, useDispatch } from 'react-redux'
import UserProfile from './Screens/Users/UserProfile';
function App() {

  const [authUser, setAuthUser] = useState(null);
  const currentUser = useSelector((state) => state.currentUser.value);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        
        const createUser = async () => {
          try {
            const profile = await emailQuery(user.email);
            dispatch(setCurrentUser(profile));
            try {
              const email = user.email;
              const indexOfFirstDot = email.indexOf('.');
              const indexOfAt = email.indexOf('@');
              const lastName = email.substring(indexOfFirstDot + 1, indexOfAt);
              const firstName = email.substring(0, indexOfFirstDot);
              const capitalizedResult =
              firstName.charAt(0).toUpperCase() + firstName.slice(1);
              const capitalizedLastname =
              lastName.charAt(0).toUpperCase() + lastName.slice(1);
              if(!profile){
                await addNewUser(
                  capitalizedResult,
                  capitalizedLastname,
                  email
                );
              }
            } catch (error) {
              console.error("Error fetching user profile:", error);
            }
            
          } catch (error) {
            console.error("Error fetching user profile:", error);
          }
        };
  
        if (!currentUser) {
          createUser();
        }
      } else {
        setAuthUser(null);
      }
    });
    return () => unsubscribe();
  }, []);


  return (
    <Router>
      <Routes>
        {authUser === null ? 
        <>
        <Route path='*' element={<StartScreen />}/>
        </>
      :
      <>
      <Route path='/' element={ <Dashboard />}/>
      <Route path='/profile' element={ <RegularMatch authUser={authUser}/>}/>
      <Route path='/tournament' element={ <Tournament />}/>
      <Route path='/ScoreBoard' element={ <ScoreBoard />}/>
      <Route path='user/:id'element={<UserProfile />}/>
      </>
      }
      </Routes>
    </Router>
  );
}
export default App;
