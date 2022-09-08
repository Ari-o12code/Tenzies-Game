import React from 'react'

const Die = (props) => {
  const style = {
    backgroundColor: props.isHeld? '#59E391' : '#FFFFFF'
  }
  return (
    <div className='die'>
      <div 
      style={style}
      onClick = {props.holdDie}
      className='dice'
      >
         <h2>{props.value}</h2> 
      </div>
    </div>
  )
}

export default Die
