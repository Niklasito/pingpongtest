import React from "react";
import "../scss/style-components/_FinishedGamesBox.scss";

const FinishedGamesBox = ({ allGames }) => {
  return (
    <>
      <div className="finished-games-heading-holder">
        <p>Finished games</p>
      </div>
      <div className="finished-games-stats">
        {allGames.map((game, index) =>
          game.active == false ? (
            <div key={index} className="finished-games">
              <div className="game-players-wrapper">
                <div className="date-time">
                  <p>{game.date.toString()}</p>
                </div>
                <p className="game-holder winner">{game.Winner}</p>
                <p className="versus-para">vs</p>
                <p key={index} className="game-holder loser">
                  {game.Loser}
                </p>
              </div>

            </div>
          ) : null
        )}
      </div>
    </>
  );
};

export default FinishedGamesBox;
