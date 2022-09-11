import React, { useEffect } from "react";
import OptionComponent from "./optionComponent";

const Step2 = ({
  playersPick,
  compsPick,
  setPlayersPick,
  setCompsPick,
  result,
  setResult,
  setStep,
  setScore,
  score,
}) => {
  console.log(playersPick);

  const comparePicks = () => {
    if (!compsPick) {
      return;
    }

    if (playersPick.beats === compsPick.name) {
      console.log("Player Wins");
      setResult("YOU WIN!");
      setScore((prevScore) => {
        return (prevScore += 1);
      });
    } else if (compsPick.beats === playersPick.name) {
      console.log("Computer Wins");
      setResult("YOU LOSE!");
    } else {
      console.log("IT'S A DRAW!");
      setResult("IT'S A DRAW!");
    }
  };

  useEffect(() => {
    comparePicks();
  }, [compsPick]);

  useEffect(() => {
    localStorage.setItem("RPSscore", score);
  }, [score]);

  const handleReset = () => {
    setResult("");
    setStep(1);
    setPlayersPick(null);
    setCompsPick(null);
  };

  return (
    <div className="step-2">
      <div className="payersChoiceWrapper">
        <h2 className="step-two-title">YOU PICKED</h2>
        <div>
          <OptionComponent option={playersPick} />
        </div>
      </div>
      {/* result */}
      {result ? (
        <div className="results-wrapper">
          <h2>{result}</h2>
          <button onClick={handleReset}>PLAY AGAIN</button>
        </div>
      ) : null}

      <div className="compChoiceWrapper">
        <h2 className="step-two-title">THE HOUSE PICKED</h2>

        <div>
          <OptionComponent option={compsPick} />
        </div>
      </div>
    </div>
  );
};

export default Step2;
