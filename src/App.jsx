import React,{ useState } from 'react'
import Header from './components/Header'
import Stepone from './components/Stepone'
import Steptwo from './components/Steptwo'


function App() {
  const [score, setScore] = useState(12)
  const [choice, setChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')

  return (
    <div className='flex flex-col items-center w-full min-h-screen py-10'>
      <Header score={score} />
      {choice === '' ? <Stepone setChoice={setChoice}/> : <Steptwo choice={choice} computerChoice={computerChoice} setComputerChoice={setComputerChoice}/>}
      
    </div>
  )
}

export default App