import React, { useEffect } from "react";
import { setFinal,setLoser } from "../../redux/Tournament/tournamentSlice";
import { useSelector, useDispatch } from 'react-redux'

function PlayOffTree({ players, pickedPlayers }) {
  const reduxLosers = useSelector(state => state.tournament.losers)
  const reduxFinal = useSelector(state => state.tournament.final);

  useEffect(() => {
    if(reduxLosers){
      reduxLosers.map((loser) => {
        const styleBtnLoser = document.getElementById(`${loser.firstname}Btn`);
        const styleTextLoser = document.getElementById(`${loser.firstname}Text`);
        if(styleBtnLoser && styleTextLoser){
          styleBtnLoser.style.display = "none";
          styleTextLoser.setAttribute("class", "loser");
        }
      })
    }
    if(reduxFinal){
      reduxFinal.map((player) => {
        const styleBtn = document.getElementById(`${player.firstname}Btn`);
        const styleText = document.getElementById(`${player.firstname}Text`);
        if(styleBtn && styleText){
          styleBtn.style.display = "none";
          styleText.setAttribute("class", "winner");
        }
      })
    }
  },[])


  const dispatch = useDispatch()


  function handleWinnerChange(name, opponent) {


     const winner = pickedPlayers.find((player) => player.firstname === name);
     const loser = pickedPlayers.find((player) => player.firstname === opponent);
     dispatch(setFinal(winner));
     dispatch(setLoser(loser));
     const styleBtnLoser = document.getElementById(`${loser.firstname}Btn`);
     const styleTextLoser = document.getElementById(`${loser.firstname}Text`);
     const styleBtn = document.getElementById(`${winner.firstname}Btn`);
     const styleText = document.getElementById(`${winner.firstname}Text`);
     if (styleBtn && styleText && styleBtnLoser && styleTextLoser) {
       styleBtn.style.display = "none";
       styleText.setAttribute("class", "winner");
       styleBtnLoser.style.display = "none";
       styleTextLoser.setAttribute("class", "loser");
     }
  }
   return players.map((player, index) =>
     index === 1 ? (
       <div key={index}>
         <p className="versus">vs</p>
         <div className={`player-field-left-${index + 1}`}>
           <p id={`${player.firstname}Text`}>{player.firstname}</p>
           <button
             className="tournament-win-btn"
             id={`${player.firstname}Btn`}
              onClick={() =>
                handleWinnerChange(player.firstname, index === 0 ? players[1].firstname : players[0].firstname)
              }
           >
             Winner
           </button>
         </div>
       </div>
     ) : (
       <div className={`player-field-left-${index + 1}`} key={index}>
         <p id={`${player.firstname}Text`}>{player.firstname}</p>
         <button
           className="tournament-win-btn"
           id={`${player.firstname}Btn`}
           onClick={() =>
             handleWinnerChange(player.firstname, index === 0 ? players[1].firstname : players[0].firstname)
           }
         >
           Winner
         </button>
       </div>
     )
   );
}

export default PlayOffTree;
