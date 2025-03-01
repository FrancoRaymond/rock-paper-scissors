import React from 'react'
import Rock from './Rock'
import Paper from './Paper'
import Scissors from './Scissors'

const Stepone = ({setChoice}) => {

  return (
    <div className="home grid grid-cols-2 gap-7 place-items-center">
      <div className="col-span-2 flex justify-center">
        <Rock onClick={(e) => setChoice(e.currentTarget.id)} enableClick={true} />
      </div>
      <Paper onClick={(e) => setChoice(e.currentTarget.id)} enableClick={true} />
      <Scissors onClick={(e) => setChoice(e.currentTarget.id)} enableClick={true} />
    </div>
  )
}

export default Stepone
