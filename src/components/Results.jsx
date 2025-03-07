import React from 'react'
import { motion } from 'framer-motion'

const Results = ({setChoice, setComputerChoice, outcome, setOutcome, setGameOver}) => {

  const handleRestart = () => {
    setChoice('')
    setComputerChoice('')
    setOutcome('')
    setGameOver(false)
  }
   
  return (
    <motion.div 
      className='results flex flex-col items-center'
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <h1 className='text-3xl font-bold text-white sm:text-5xl'>{outcome}</h1>
      <button
        onClick={handleRestart} 
        className='playAgainBtn rounded-md cursor-pointer bg-white text-blue-950 hover:text-red-600 transition-all duration-300'
      >
        PLAY AGAIN
      </button>
    </motion.div>
  )
}

export default Results;
