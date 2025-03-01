import React from 'react'
import paper from '../assets/images/icon-paper.svg'

const Paper = ({ onClick }) => {
  return (
    <div onClick={onClick} id='paper' className='cursor-pointer paper rock h-36 w-36 bg-blue-400 rounded-full flex justify-center items-center '>
      <div className='bg-white h-28 w-28 rounded-full flex justify-center items-center'>
        <img src={paper} alt=""  className='margin-6'/>
      </div> 
    </div>
  )
}

export default Paper
