import React from 'react'
import scissors from '../assets/images/icon-scissors.svg'

const Scissors = ({ onClick}) => {
  return (
    <div onClick={onClick} id='scissors' className='cursor-pointer h-32 w-32 sm:h-36 sm:w-36 md:h-44 md:w-44 bg-yellow-400 rounded-full flex justify-center items-center '>
      <div className='bg-white h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full flex justify-center items-center'>
        <img src={scissors} alt=""  className='margin-6'/>
      </div>
    </div>
  )
}

export default Scissors
