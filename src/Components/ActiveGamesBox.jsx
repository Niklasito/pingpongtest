import React from "react";
import "../scss/style-components/_ActiveGamesBox.scss";
import { updateField, addLoss, queryForDocs } from "../config/firebase";
import { useSelector, useDispatch } from 'react-redux'
import { updateGame } from "../redux/Games/AllGames/allGames"
import { setCurrentUser } from "../redux/Users/currentUser/currentUser";
const ActiveGamesBox = ({reduxAllGames}) => {


  const dispatch = useDispatch();
  //const allGames = useSelector(state => state.allGames.value);
  const currentUser = useSelector(state => state.currentUser.value);
  
  const handleButtonClick = (document, winnervalue, loserValue) => {
    updateField("games", document, winnervalue, loserValue);

    addLoss(loserValue, 10);
    queryForDocs(winnervalue, 10);

    dispatch(updateGame({
      id: document, 
      updatedFields:{
        active: false,
        Loser: loserValue,
        Winner: winnervalue,
      }
    }));

    if (winnervalue === currentUser.firstname) {
      dispatch(setCurrentUser({
        ...currentUser,
        Win: currentUser.Win + 1,
        points: currentUser.points + 10,
      }));
    } else {

      dispatch(setCurrentUser({
        ...currentUser,
        Losses: currentUser.Losses + 1,
        points: currentUser.points - 10,
      }));
    }
  };

  return (
    <>
      <div className="active-games-heading-holder">
        <p>Active games</p>
      </div>
      <div className="active-games-stats">
        <ul>
          {reduxAllGames.map((game, index) =>
            game.active ? (
              <li className="game-wrapper" key={index}>
                <div className="players-wrapper">
                  <p>
                    {game.admin} vs {game.player}
                  </p>
                </div>
                <div className="select-winner-wrapper">
                  <h5>Select Winner</h5>
                  <div>
                    <button
                      className="winBtn"
                      onClick={() =>
                        handleButtonClick(
                          game.id,
                          game.admin,
                          game.player,
                          game.admin,
                          game.player
                        )
                      }
                    >
                      {game.admin}
                    </button>
                    <button
                      className="loseBtn"
                      onClick={() =>
                        handleButtonClick(
                          game.id,
                          game.player,
                          game.admin,
                          game.admin,
                          game.player
                        )
                      }
                    >
                      {game.player}
                    </button>
                  </div>
                </div>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </>
  );
};

export default ActiveGamesBox;
