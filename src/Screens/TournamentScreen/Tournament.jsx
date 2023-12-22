import React, { useState, useEffect } from "react";
import { readAllDocumentsInCollection, storage } from "../../config/firebase";
import "../../scss/style-pages/_Tournament.scss";
import Backbutton from "../../Components/Backbutton";
import PlayOffTree from "../../components/PlayOffTree/PlayOffTree";
import FinalPlayOffTree from "../../components/PlayOffTree/FinalPlayOffTree";
import { useSelector, useDispatch } from "react-redux";
import {
  setTournamentPlayers,
  setStart,
  setPickedPlayers,
  setPlayersLeft,
  setPlayersRight,
  setFinal,
  setWinner,
  removePickedPlayers,
  removePlayersLeft,
  removePlayersRight,
  removeFinal,
  removeLoser,
} from "../../redux/Tournament/tournamentSlice";
import { getDownloadURL, ref } from "@firebase/storage";
import { setAllUsers } from "../../redux/Users/allUsers/allUsersSlice";
const Tournament = () => {
  const reduxSetStart = useSelector((state) => state.tournament.start);
  const reduxTournamentPlayers = useSelector((state) => state.tournament.value);
  const reduxPickedPlayers = useSelector(
    (state) => state.tournament.pickedPlayers
  );
  const reduxPlayersRight = useSelector(
    (state) => state.tournament.playersLeft
  );
  const reduxPlayersLeft = useSelector(
    (state) => state.tournament.playersRight
  );
  const reduxFinal = useSelector((state) => state.tournament.final);
  const currentUser = useSelector((state) => state.currentUser.value);
  const reduxWinner = useSelector((state) => state.tournament.winner);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  async function fetchDataAndSort() {
    try {
      const users = await readAllDocumentsInCollection("users");
      users.sort((a, b) => b.points - a.points);
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      return null;
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sortedUsers = await fetchDataAndSort();
        dispatch(setTournamentPlayers(sortedUsers));
        dispatch(setAllUsers(sortedUsers));
      } catch (error) {
        console.error("Error fetching and sorting users:", error);
      }
    };

    if (reduxTournamentPlayers.length === 0) {
      fetchData();
    }

    if (reduxPickedPlayers.length === 4) {
      const leftArray = reduxPickedPlayers;
      const rightArray = reduxPickedPlayers;
      dispatch(setPlayersLeft(leftArray.slice(0, 2)));
      dispatch(setPlayersRight(rightArray.slice(2, 4)));
      dispatch(setStart(true));
    }
    if (reduxWinner) {
      if(reduxWinner.image){
        getDownloadURL(ref(storage, `${reduxWinner.image}`)).then((url) => {
          setImage(url);
        });
      }

    }
    
  }, [reduxPickedPlayers, reduxWinner]);

 useEffect(() =>{
  if(currentUser){
    dispatch(setPickedPlayers(currentUser));
  }

},[currentUser])

  function showBoard(user) {
    dispatch(setPickedPlayers(user));
    const element = document.getElementById(`${user.firstname}`);
    if (element) {
      element.style.display = "none";
    }
  }

  function playAgain() {
    dispatch(setStart(false));
    dispatch(removePickedPlayers([]));
    dispatch(setPickedPlayers(currentUser));
    dispatch(removePlayersLeft([]));
    dispatch(removePlayersRight([]));
    dispatch(removeFinal([]));
    dispatch(setWinner(null));
    dispatch(removeLoser([]));
  }
  //console.log(reduxTournamentPlayers);
  return (
    <>
      <div className="wrapper">
        <div className="tournament-match-hero">
          <Backbutton path={"/"} />
          <div className="tournament-info">
            {reduxWinner !== null ? (
              <></>
            ) : (
              <>
                <h2 className="tournament-heading">PLAY TOURNAMENT</h2>
                <div className="marker-holder">
                  <p>ADD 3 PLAYERS</p>
                </div>
              </>
            )}
            <div className="tournament-players-buttons">
              {!reduxSetStart &&
              reduxTournamentPlayers.length > 2 &&
              currentUser ? (
                reduxTournamentPlayers.map((user, index) => {
                  return user.firstname !== currentUser.firstname ? (
                    <div key={index} className="name-holder">
                      <button
                        id={user.firstname}
                        className="name challenge-btn"
                        onClick={() => showBoard(user)}
                      >
                        {user.firstname}
                      </button>
                    </div>
                  ) : null;
                })
              ) : reduxWinner === null ? (
                <div>
                  <div className="all-fields-holder">
                    <div className="player-fields-left-holder">
                      <PlayOffTree
                        players={reduxPlayersLeft}
                        pickedPlayers={reduxPickedPlayers}
                        setFinal={setFinal}
                        final={reduxFinal}
                      />
                    </div>

                    <div className="player-fields-left-holder">
                      <PlayOffTree
                        players={reduxPlayersRight}
                        pickedPlayers={reduxPickedPlayers}
                        final={reduxFinal}
                      />
                    </div>
                  </div>
                  <div className="final-game">
                    <div className="player-field-final">
                      {reduxFinal.length === 2 ? (
                        <FinalPlayOffTree
                          players={reduxFinal}
                          final={reduxFinal}
                          pickedPlayers={reduxPickedPlayers}
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
              ) : null}
              {reduxWinner !== null ? (
                <div className="winner-box-holder">
                  <div className="winner-box">
                    <button
                      className="challenge-btn play-again"
                      onClick={() => playAgain()}
                    >
                      PLAY AGAIN
                    </button>
                    <h2>The winner of the tournament is...</h2>
                    {reduxWinner.image ? (
                      <img className="winner-img" src={image} />
                    ) : (
                      <img src="src\assets\images\delow.jpg"></img>
                    )}

                    <h3>{reduxWinner.firstname}, you get 50 points!</h3>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tournament;
