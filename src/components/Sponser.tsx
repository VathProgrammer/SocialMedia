import React from 'react'
import Metfone from "../assets/Metfone.png";

type Props = {}

const Sponser = (props: Props) => {
  return (
    <div className=' dark:bg-gray-800 p-3 rounded-lg bg-white'>
          <h2>Spornser</h2>
          <img src={Metfone} alt=""
          className=' object-contain h-40 rounded-lg '
          />
          <h2 className='mb-1'>Metfone Play</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eum sequi quas deleniti dicta officia maxime dolor dolorum molestiae nam!</p>
    </div>
  )
}

export default Sponser;