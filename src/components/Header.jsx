import React from 'react'

const Header = ({score}) => {

  return (
    <div className='py-4 px-7 border-2 border-gray-400 rounded-md w-full flex items-center justify-between max-w-[35rem]'>
      <div className='text-white font-semibold text-3xl'>
        <h1>Rock</h1>
        <h1>PAPER</h1>
        <h1>SCISSORS</h1>
      </div>
      <div className='bg-white flex flex-col gap-2 py-3 px-8 w-fit'>
        <span className='text-blue-950 font-semibold mt-2'>SCORE</span>
        <span className='text-6xl text-gray-600 font-bold'>{score}</span>
      </div>
    </div>
  )
}

export default Header
