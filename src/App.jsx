import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Stepone from './components/Stepone'
import Steptwo from './components/Steptwo'
import Rules from './components/Rules'
import Results from './components/Results'

function App() {
  const [score, setScore] = useState(0)
  const [choice, setChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')
  const [rules, setRules] = useState(false)
  const [outcome, setOutcome] = useState('')
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    if (!choice || !computerChoice) return; 

    const checkWinner = () => {
      let result = "";

      if (choice === computerChoice) {
        result = "TIE!";
      } else if (
        (choice === "paper" && computerChoice === "scissors") ||
        (choice === "scissors" && computerChoice === "rock") ||
        (choice === "rock" && computerChoice === "paper")
      ) {
        result = "YOU LOSE!";
        setScore((prevScore) => prevScore - 2); 
      } else {
        result = "YOU WIN!";
        setScore((prevScore) => prevScore + 2); 
      }

      setOutcome(result);

      setTimeout(() => {
        setGameOver(true);
      }, 200);
    };

    checkWinner();
  }, [choice, computerChoice]); 

  return (
    <div className='flex flex-col items-center w-full min-h-screen'>
      <Header score={score} />

      {choice === '' ? 
        <Stepone setChoice={setChoice}/> : 
        <Steptwo 
          gameOver={gameOver} 
          choice={choice} 
          computerChoice={computerChoice} 
          setComputerChoice={setComputerChoice} 
          outcome={outcome}
          setOutcome={setOutcome}
          setChoice={setChoice}
          setGameOver={setGameOver}
        />
      }
      {rules && <Rules setRules={setRules} />}

      <div className="flex-grow"></div>

      {gameOver && (
        <div className='md:hidden'>
          <Results 
          outcome={outcome} 
          setOutcome={setOutcome} 
          choice={choice} 
          setChoice={setChoice} 
          computerChoice={computerChoice} 
          setComputerChoice={setComputerChoice}
          setGameOver={setGameOver} 
        />
        </div>  
      )}
      <button 
        onClick={() => setRules(true)}
        className="rulesBtn text-gray-300 cursor-pointer text-xl font-semibold bg-transparent border-2 border-gray-300 rounded-md"
      >
        Rules
      </button>
    </div>
  )
}

export default App;