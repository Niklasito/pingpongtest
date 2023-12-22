import React from "react";
import "../../scss/style-pages/_Dashboard.scss";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import PingPongBall from "../../Components/PingPongBall";

const Dashboard = () => {
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="dashboard-screen-container">
        <nav className="nav-wrapper">
          <ul className="nav-options-holder">
            <Link className="link" to={"/profile"}>
              <li className="nav-regular-game-button">PROFILE </li>
            </Link>
            <Link className="link" to={"/tournament"}>
              <li className="nav-tournament-button">TOURNAMENT </li>
            </Link>
            <Link className="link" to={"/scoreboard"}>
              <li className="nav-scoreboard-button">SCOREBOARD </li>
            </Link>
            <li
              className="nav-scoreboard-button sign-out-button"
              onClick={logOut}
            >
              SIGN OUT
            </li>
          </ul>
        </nav>
        <div className="dashboard-screen-hero">
          <PingPongBall />

          <div className="dashboard-screen-heading-holder">
            <h2>PINGPONGFINITY</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
