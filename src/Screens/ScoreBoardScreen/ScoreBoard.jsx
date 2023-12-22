import React, { useEffect } from "react";
import { readAllDocumentsInCollection } from "../../config/firebase";
import Backbutton from "../../Components/Backbutton";
import { useSelector, useDispatch } from "react-redux";
import { setAllUsers } from "../../redux/Users/allUsers/allUsersSlice";
import { Link } from "react-router-dom";
import "../../scss/style-components/_ScoreBoardComponent.scss";
const ScoreBoard = () => {
  const reduxAllUsers = useSelector((state) => state.allUsers.value);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (reduxAllUsers === null) {
          const sortedUsers = await fetchDataAndSort();
          dispatch(setAllUsers(sortedUsers));
        }
      } catch (error) {
        console.error("Error fetching and sorting users:", error);
      }
    };
    fetchData();
  }, []);

  async function fetchDataAndSort() {
    try {
      const users = await readAllDocumentsInCollection("users");
      users.sort((a, b) => b.points - a.points);

      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }

  const rankingImgList = [
    "src/assets/images/waldner.jpg",
    "src/assets/images/persson.jpg",
    "src/assets/images/Timoboll.jpg",
    "src/assets/images/malong.jpg",
    "src/assets/images/truls.jpg",
    "src/assets/images/delow.jpg",
  ];
  return (
    <>
      <div className="wrapper">
        <div className="scoreboard-hero">
          <Backbutton path={"/"} />
          <div className="scoreboard-info-holder">
            <div className="scoreboard-heading-holder">
              <h2>SCOREBOARD</h2>
            </div>
            <div className="scoreboard">
              <div className="scoreboard-stats-heading-holder">
                <div className="ranking-holder">
                  <h2>Rank</h2>
                </div>
                <div className="player-holder">
                  <h2>Player</h2>
                </div>
                <div className="points-holder">
                  <h2>Points</h2>
                </div>
              </div>

              {reduxAllUsers
                ? reduxAllUsers.map((user, index) => {
                    return (
                      <Link
                        className="profile-link"
                        to={`/user/${index}`}
                        key={index}
                      >
                        <div className="scoreboard-stats">
                          {index < 5 ? (
                            <div className="position-holder">
                              <img src={rankingImgList[index]}></img>
                            </div>
                          ) : (
                            <div className="position-holder">
                              <img src={rankingImgList[5]}></img>
                            </div>
                          )}

                      <div className="player-holder">
                        <p className="name">{user.firstname}</p>
                      </div>
                      <div className="player-points-holder">
                        <p>{user.points}</p>
                      </div>
                    </div>
                  </Link>
                );
              }) : null} 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreBoard;
