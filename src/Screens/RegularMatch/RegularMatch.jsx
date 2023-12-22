import React, { useEffect, useState } from "react";
import "../../scss/style-pages/_RegularMatch.scss";
import Backbutton from "../../Components/Backbutton";
import ActiveGamesBox from "../../Components/activeGamesBox";
import FinishedGamesBox from "../../Components/FinishedGamesBox";
import {
  emailQuery,
  createEvent,
  gameQuery,
  readAllDocumentsInCollection,
  updateUserField,
  emailQueryWithDocId,
} from "../../config/firebase";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { setAllGames, setNewGame } from "../../redux/Games/AllGames/allGames";
import { setAllUsers } from "../../redux/Users/allUsers/allUsersSlice";
import {
  setCurrentUser,
  setCurrent,
} from "../../redux/Users/currentUser/currentUser";
import emailjs from "@emailjs/browser";
import { storage } from "../../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
const RegularMatch = ({ authUser }) => {
  const [toggle, setToggle] = useState(false);
  const reduxAllUsers = useSelector((state) => state.allUsers.value);
  const reduxAllGames = useSelector((state) => state.allGames.value);
  const currentUser = useSelector((state) => state.currentUser.value);
  const current = useSelector((state) => state.currentUser.current);
  const dispatch = useDispatch();
  const [profileImg, setProfileImg] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const profile = await emailQuery(authUser.email);
        dispatch(setCurrentUser(profile));
        if (reduxAllUsers === null) {    
          const users = await readAllDocumentsInCollection("users");
          
          users.sort((a, b) => b.points - a.points);
          dispatch(setAllUsers(users));
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchData();
  }, [authUser.email]);

  useEffect(() => {
    if (currentUser && !current) {
      dispatch(setCurrent(true));
      const fetchGames = async () => {
        try {
          if (reduxAllGames) {
            const allGamesQuery = await gameQuery(currentUser.firstname);
            dispatch(setAllGames(allGamesQuery));
          }
        } catch (error) {
          console.error("Error fetching games:", error);
        }
      };
      fetchGames();
    }
    if (currentUser) {
      if (currentUser.image !== null) {
        getDownloadURL(ref(storage, `${currentUser.image}`)).then((url) => {
          setProfileImg(url);
        });
      }
    }
  }, [currentUser]);

  function showOpponents() {
    setToggle(!toggle);
  }

  function sendGameInvitationEmail(user, opponent, API_KEY) {
    emailjs.init("lh8JE1pNJXDTiD_y4");

    var templateParams = {
      user: user,
      opponentname: opponent.firstname,
      opponent: opponent,
    };

    emailjs.send("service_juhetev", "template_bl8y6be", templateParams).then(
      function (response) {
        console.log("email-sent", response.status, response.text);
      },
      function (error) {
        console.error(error);
      }
    );
  }

  function inviteToGame(opponent) {
    const API_KEY = import.meta.env.VITE_APP_EMAIL_JS_KEY;
    const today = new Date();
    const formatedDate = today.toLocaleDateString();
    let myuuid = uuidv4();
    createEvent("games", myuuid, currentUser.firstname, opponent.firstname);
    dispatch(
      setNewGame({
        id: myuuid,
        Loser: null,
        Winner: null,
        active: true,
        admin: currentUser.firstname,
        player: opponent.firstname,
        date: formatedDate,
      })
    );
    //sendGameInvitationEmail(currentUser.firstname, opponent, API_KEY);

    setToggle(false);
  }

  async function getUserDocId() {
    try {
      const userDocId = await emailQueryWithDocId(currentUser.email);
      return userDocId;
    } catch (error) {
      console.error("Error:", error);
    }
  }
  async function uploadImage(event) {
    if (event === null) return;

    const userDoc = await getUserDocId();
    const img = `images/${userDoc.docId}`;
    const imageRef = ref(storage, img);

    setImageUpload(img);
    uploadBytes(imageRef, event).then(() => {
      updateUserField(userDoc.docId, "image", img).then(() => {
        getDownloadURL(ref(storage, `${img}`)).then((url) => {
          setProfileImg(url);
        });
      });
    });
  }

  return (
    <>
      <div className="wrapper">
        <div className="regular-match-hero">
          <Backbutton path={"/"} />
          <div className="regular-match-playerinfo-holder">
            <div className="player-info">
              {currentUser ? (
                <>
                  <h3 className="player-name">
                    {currentUser.firstname} {currentUser.lastname}
                  </h3>
                  <div className="image-holder">
                    {currentUser.image ? (
                      profileImg ? (
                        <>
                          <img src={profileImg} />
                          <input
                            className="upload-image"
                            type="file"
                            id="img-upload"
                            onChange={(event) =>
                              uploadImage(event.target.files[0])
                            }
                            style={{ display: "none" }}
                          />
                          <label
                            htmlFor="img-upload"
                            className="image-upload-label"
                          >
                            <i className="fa-solid fa-plus"></i>
                          </label>
                        </>
                      ) : (
                        <div className="lds-ring">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      )
                    ) : (
                      <>
                        <img src="src\assets\images\delow.jpg"></img>
                        <input
                          className="upload-image"
                          type="file"
                          id="img-upload"
                          onChange={(event) =>
                            uploadImage(event.target.files[0])
                          }
                          style={{ display: "none" }}
                        />
                        <label
                          htmlFor="img-upload"
                          className="image-upload-label"
                        >
                          <i className="fa-solid fa-plus"></i>
                        </label>
                      </>
                    )}
                  </div>
                  <h4 className="score-title">Score</h4>
                  <p className="score-points">{currentUser.points}</p>
                  {currentUser.Win > 0 && currentUser.Losses > 0 ? (
                    <>
                      <h3 className="win-percentage-title">Win percentage </h3>
                      <p className="win-percentage-figures">
                        {" "}
                        {(
                          (currentUser.Win /
                            (currentUser.Win + currentUser.Losses)) *
                          100
                        ).toFixed(1)}
                        %
                      </p>
                    </>
                  ) : null}

                  <h5 className="results-heading">
                    Wins: <span className="wins">{currentUser.Win}</span> /
                    Losses: <span className="losses">{currentUser.Losses}</span>
                  </h5>
                </>
              ) : null}
              <button
                className="challenge-opponent-button"
                onClick={showOpponents}
              >
                CHALLENGE
              </button>
            </div>
          </div>

          <div className="opponent-holder">
            {toggle
              ? reduxAllUsers.map((user, index) => {
                  return user.email !== authUser.email ? (
                    <button
                      className="challenge-btn"
                      key={index}
                      onClick={() => inviteToGame(user)}
                    >
                      {user.firstname}
                    </button>
                  ) : null;
                })
              : null}
          </div>

          <div className="regular-match-gamestats-holder">
            <div className="active-games-wrapper">
              {reduxAllGames !== null ? (
                <ActiveGamesBox reduxAllGames={reduxAllGames} />
              ) : null}
            </div>
            <div className="finished-games-wrapper">
              {reduxAllGames !== null ? (
                <FinishedGamesBox allGames={reduxAllGames} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegularMatch;
