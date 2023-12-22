import React from "react";
import "../scss/style-components/_ScoreBoardComponent.scss";

const ScoreBoardComponent = () => {
  return (
    <>
      <div className="scoreboard-heading-holder">
        <h2>SCOREBOARD</h2>
      </div>
      <div className="scoreboard">
        <div className="scoreboard-stats-heading-holder">
          <div>
            <h2>Position</h2>
          </div>
          <div>
            <h2>Player</h2>
          </div>
          <div>
            <h2>Points</h2>
          </div>
        </div>
        <div className="scoreboard-stats">
          <div>
            <p>1.</p>
          </div>
          <div className="name-holder">
            <p className="name">Niklas</p>
          </div>
          <div>
            <p>99</p>
          </div>
        </div>
        <div className="scoreboard-stats">
          <div>
            <p>2.</p>
          </div>
          <div className="name-holder">
            <p className="name">Hannes</p>
          </div>
          <div>
            <p>42</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreBoardComponent;
