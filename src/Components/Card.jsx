import React from 'react'
import './card.css'

const Card = ({name,desc, characters, action}) => {

    const index = Math.random()

  return (
    <div>
      <div className='card_container'>
          <h3>{name}</h3>
          <p>{desc}</p>
          <div className='characters'>
              <ul>
                {characters.map((el) =>  <li>{el}</li>)}
              </ul>
          </div>
          <button onClick={() => action(name,characters)} className='btn'>
                click me
          </button>
      </div>
    </div>
  )
}

export default Card