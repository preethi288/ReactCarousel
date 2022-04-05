import React from 'react'
import image from './image.jpeg'
import './style.css'

function ImageRender() {
  return (
    <div className='container'>
      <img src={image} alt='parachute pic'/>
    </div>
  )
}

export default ImageRender