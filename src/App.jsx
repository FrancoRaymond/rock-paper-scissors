import React,{ useState } from 'react'
import Header from './components/Header'
import Stepone from './components/Stepone'
import Steptwo from './components/Steptwo'
import Rules from './components/Rules'


function App() {
  const [score, setScore] = useState(12)
  const [choice, setChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')
  const [rules, setRules] = useState(false)

  return (
    <div className='flex flex-col items-center w-full min-h-screen py-10'>
      <Header score={score} />
      {choice === '' ? <Stepone setChoice={setChoice}/> : <Steptwo choice={choice} computerChoice={computerChoice} setComputerChoice={setComputerChoice}/>} 
      {rules ? <Rules setRules={setRules} /> : ''}
      <div className="flex-grow"></div>
      <button 
        onClick={() => setRules(true)}
        className="rulesBtn text-gray-300 cursor-pointer text-xl font-semibold bg-transparent border-2 border-gray-300 rounded-md"
      >
        Rules
      </button>
    </div>
  )
}

export default App