import React from "react";
import "../../scss/style-pages/_StartScreen.scss";
import PingPongBall from "../../Components/PingPongBall";
import SignIn from "../../components/Auth/SignIn";


function StartScreen() {

  return (
      <div className="start-screen-container">
        <div className="start-screen-hero">
          <PingPongBall />
          <div className="start-screen-heading-holder">
            <h2>PINGPONGFINITY</h2>
          </div>
          <div className="start-screen-login-holder">
            <SignIn />
          </div>
        </div>
      </div>
  );
}

export default StartScreen;
