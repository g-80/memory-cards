import React from "react";

function Scoreboard(props) {
  return (
    <div className="scoreboard-container">
      <div className="current-score">Score {props.currentScore}</div>
      <div className="best-score">Best score {props.bestScore}</div>
    </div>
  );
}

export default Scoreboard;
