import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";
import Results from "./Results";

const Steptwo = (
  { 
    choice, 
    computerChoice, 
    setComputerChoice, 
    gameOver, 
    setGameOver, 
    setChoice, 
    outcome, 
    setOutcome
  }) => {
  const options = ["rock", "paper", "scissors"];

  useEffect(() => {
    const timer = setTimeout(() => {
      const randomChoice = options[Math.floor(Math.random() * options.length)];
      setComputerChoice(randomChoice);
    }, 2000);

    return () => clearTimeout(timer);
  }, [choice]);
  
  useEffect(() => {
    if (computerChoice) {
    }
  }, [computerChoice]);

  const renderChoice = (selectedChoice) => {
    switch (selectedChoice) {
      case "rock":
        return <Rock />;
      case "paper":
        return <Paper />;
      case "scissors":
        return <Scissors />;
      default:
        return <h1>No choice selected</h1>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="steptwo flex gap-5 md:gap-16 items-center"
    >
      <div className="flex flex-col-reverse md:flex-col gap-5 items-center">
        <h1 className="text-gray-300 text-l md:text-xl font-semibold text-center">YOU PICKED</h1>
        {renderChoice(choice)}
      </div>
      {gameOver && (
        <div className="hidden md:flex">
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
      <div className="flex flex-col gap-5 justify-center">
        
        {!computerChoice ? (
          <motion.div
            className="computerChoiceLoader w-28 h-28 rounded-full bg-gray-300"
            animate={{
              scale: [1, 0.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col-reverse md:flex-col gap-5 items-center"
          >
            <h1 className="text-gray-300 text-l md:text-xl font-semibold text-center">THE HOUSE PICKED</h1>
            {renderChoice(computerChoice)}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Steptwo;