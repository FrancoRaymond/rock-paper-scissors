import React,{ useState } from 'react'
import Header from './components/Header'
import Stepone from './components/Stepone'

function App() {

  const [score, setScore] = useState(12)

  return (
    <div className='flex flex-col items-center w-full min-h-screen py-10'>
      <Header score={score} />
      <Stepone />
    </div>
  )
}

export default App
