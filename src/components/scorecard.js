import React from "react";

import "./scoreCard.css";

/**
 * Component that displays the player's score.
 *
 * @param {object} props - Props to pass to the component.
 * @param {number} props.score - The player's current score.
 * @param {number} props.highScore - The highest score the player has achieved.
 */
function ScoreCard(props) {
  const { score, highScore } = props;
  return (
    <div id="scoreCard">
      <p>Score: {score}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
}

export default ScoreCard;
