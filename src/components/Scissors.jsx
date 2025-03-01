import React from 'react'
import scissors from '../assets/images/icon-scissors.svg'

const Scissors = ({ onClick}) => {
  return (
    <div onClick={onClick} id='scissors' className='cursor-pointer h-36 w-36 bg-yellow-400 rounded-full flex justify-center items-center '>
      <div className='bg-white h-28 w-28 rounded-full flex justify-center items-center'>
        <img src={scissors} alt=""  className='margin-6'/>
      </div> 
    </div>
  )
}

export default Scissors
