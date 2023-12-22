import React from "react";
import { queryForDocs, addLoss } from "../../config/firebase";
import { useDispatch, useSelector } from 'react-redux'
import { setWinner } from "../../redux/Tournament/tournamentSlice";
import { updateUser } from "../../redux/Users/allUsers/allUsersSlice";
function FinalPlayOffTree({ players, final, pickedPlayers }) {
  const dispatch = useDispatch()
  const reduxAllUsers = useSelector((state) => state.allUsers.value);


  async function handleChampion(name, opponent) {
    const winner = final.find((player) => player.firstname === name.firstname);
    const loser = final.find((player) => player.firstname === opponent.firstname);
    const styleBtnLoser = document.getElementById(`final${loser.firstname}`);
    const styleTextLoser = document.getElementById(`final${loser.firstname}Text`);
    const styleBtn = document.getElementById(`final${winner.firstname}`);
    const styleText = document.getElementById(`final${winner.firstname}Text`);
    if (styleBtn && styleText && styleBtnLoser && styleTextLoser) {
      styleBtn.style.display = "none";
      styleText.setAttribute("class", "winner finalist-1");
      styleBtnLoser.style.display = "none";
      styleTextLoser.setAttribute("class", "loser finalist-1");
    }
    dispatch(setWinner(name));
    try {

      queryForDocs(name.firstname, 50);
      reduxAllUsers.map((test) =>{
        if(test.id === name.id){
          dispatch(updateUser({id: name.id, points: test.points + 50}))
        }
      })

      
      pickedPlayers.map((loser) => {
        if (loser.firstname !== name.firstname) {
          const testLoser = reduxAllUsers.find((test) => test.firstname === loser.firstname);
          addLoss(loser.firstname, 10);
          dispatch(updateUser({id: loser.id, points: testLoser.points - 10}))
        }
      });
    } catch (error) {
      console.error("Error querying for winner:", error);
    }
  }


  return players.map((player, index) => (
    <div className="finalist-box" key={index}>
      <p id={`final${player.firstname}Text`} className="finalist-1">
        {player.firstname}
      </p>
      <button
        className="tournament-win-btn"
        id={`final${player.firstname}`}
        onClick={() =>
          handleChampion(player, index === 0 ? final[1] : final[0])
        }
      >
        Winner
      </button>
    </div>
  ));
}

export default FinalPlayOffTree;
