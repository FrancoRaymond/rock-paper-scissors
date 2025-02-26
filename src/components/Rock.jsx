import React from 'react'
import rock from '../assets/images/icon-rock.svg'

const Rock = () => {
  return (
    <div className='rock h-36 w-36 bg-red-400 rounded-full flex justify-center items-center '>
      <div className='bg-white h-28 w-28 rounded-full flex justify-center items-center'>
        <img src={rock} alt=""  className='margin-6'/>
      </div> 
    </div>
  )
}

export default Rock