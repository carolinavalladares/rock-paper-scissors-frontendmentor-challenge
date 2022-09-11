import { useState, useEffect } from "react";

import "./App.css";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";

const options = [
  {
    name: "paper",
    icon: "./images/icon-paper.svg",
    beats: "rock",
  },
  {
    name: "scissors",
    icon: "./images/icon-scissors.svg",
    beats: "paper",
  },
  {
    name: "rock",
    icon: "./images/icon-rock.svg",
    beats: "scissors",
  },
];

function App() {
  const [step, setStep] = useState(1);
  const [playersPick, setPlayersPick] = useState();
  const [compsPick, setCompsPick] = useState();
  const [result, setResult] = useState();
  const [score, setScore] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setScore(() => Number(localStorage.getItem("RPSscore")));
  }, []);

  const handleCompsChoice = () => {
    let randomIndex = Math.floor(Math.random() * 3);

    console.log(randomIndex);
    setCompsPick(options[randomIndex]);
  };

  useEffect(() => {
    if (step === 2) {
      setTimeout(() => {
        handleCompsChoice();
      }, 1000);
    }
  }, [step]);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <main>
        {/*  Top Container  */}
        <div className="top-container">
          <h1 className="title">ROCK PAPER SCISSORS</h1>
          <div className="score-wrapper">
            <span>Score:</span>
            <div>{score}</div>
          </div>
        </div>
        {/*  Game Container */}
        <div className="game-container">
          {/* Steps */}
          {step === 1 ? (
            <Step1
              setStep={setStep}
              step={step}
              options={options}
              setPlayersPick={setPlayersPick}
            />
          ) : step === 2 ? (
            <Step2
              setResult={setResult}
              result={result}
              playersPick={playersPick}
              compsPick={compsPick}
              setStep={setStep}
              setScore={setScore}
              setCompsPick={setCompsPick}
              setPlayersPick={setPlayersPick}
              score={score}
            />
          ) : (
            ""
          )}
        </div>
        <div className="rulesBtnWrapper">
          <button onClick={handleOpenModal} className="rules-btn">
            RULES
          </button>
        </div>
        <div className={`${"rulesModalOverlay"} ${modalOpen ? "open" : ""}`}>
          <div className="rulesModal">
            <button onClick={handleCloseModal} className="close-btn">
              <img src="./images/icon-close.svg" />
            </button>
            <h2 className="rulesTitle">RULES</h2>

            <img src="./images/image-rules.svg" />
          </div>
        </div>
      </main>

      {/*  Attribution  */}
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          {" "}
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/carolinavalladares" target="_blank">
          Carolina Valladares
        </a>
        .
      </div>
    </div>
  );
}

export default App;
