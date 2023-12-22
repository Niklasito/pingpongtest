import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../../scss/style-pages/_RegularMatch.scss";
import Backbutton from "../../Components/Backbutton";
import { useSelector, useDispatch } from "react-redux";
import {
  gameQuery,
  readAllDocumentsInCollection,
  storage,
} from "../../config/firebase";
import { setAllUsers } from "../../redux/Users/allUsers/allUsersSlice";
import { setSingleUserGames } from "../../redux/Users/SingleUser/singleUser";
import FinishedGamesBox from "../../Components/FinishedGamesBox";
import { getDownloadURL, ref } from "@firebase/storage";
import "../../scss/style-pages/_RegularMatch.scss";
function UserProfile() {
  const reduxAllUsers = useSelector((state) => state.allUsers.value);
  const singleUserGames = useSelector((state) => state.singleUser.value);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (reduxAllUsers === null) {
          const sortedUsers = await fetchDataAndSort();
          dispatch(setAllUsers(sortedUsers.users));
        }
        const allGamesQuery = await gameQuery(reduxAllUsers[id].firstname);
        dispatch(setSingleUserGames(allGamesQuery));
      } catch (error) {
        console.error("Error fetching and sorting users:", error);
      }
    };
    fetchData();
    if (reduxAllUsers[id].image) {
      getDownloadURL(ref(storage, `${reduxAllUsers[id].image}`)).then((url) => {
        setImage(url);
      });
    }
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
  return (
    <div className="wrapper">
      <div className="regular-match-hero profile-hero">
        <Backbutton path={"/scoreboard"} />
        <div className="regular-match-playerinfo-holder">
          <div className="player-info">
            {reduxAllUsers ? (
              <div>
                <h2 className="player-name">
                  {reduxAllUsers[id].firstname} {reduxAllUsers[id].lastname}
                </h2>
                {image !== null ? (
                  <img className="profile-image" src={image} />
                ) : (
                  <p>No profile image</p>
                )}
                <h4 className="score-title">Score</h4>
                <p className="score-points">{reduxAllUsers[id].points}</p>
                {reduxAllUsers[id].Win > 0 && reduxAllUsers[id].Losses > 0 ? (
                  <>
                    <h3 className="win-percentage-title">Win percentage </h3>
                    <p className="win-percentage-figures">
                      {" "}
                      {(
                        (reduxAllUsers[id].Win /
                          (reduxAllUsers[id].Win + reduxAllUsers[id].Losses)) *
                        100
                      ).toFixed(1)}
                      %
                    </p>
                  </>
                ) : null}
                <h5 className="results-heading">
                  Wins: <span className="wins">{reduxAllUsers[id].Win}</span> /
                  Losses:{" "}
                  <span className="losses">{reduxAllUsers[id].Losses}</span>
                </h5>
              </div>
            ) : null}
          </div>
        </div>
        <div className="regular-match-gamestats-holder">
          <div className="finished-games-wrapper">
            {singleUserGames !== null ? (
              <FinishedGamesBox allGames={singleUserGames} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
