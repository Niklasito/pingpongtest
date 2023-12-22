import React from "react";
import "../scss/style-components/_PingPongBall.scss";
const PingPongBall = () => {
  return (
    <>
      <div className="start-screen-ball-holder">
        <div className="ball"></div>
        <div className="shadow"></div>
      </div>
    </>
  );
};

export default PingPongBall;
