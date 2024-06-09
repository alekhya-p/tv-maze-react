import React from 'react'
import './MovieDisplay.css'

const MovieDisplay = (props: { key: number; id: number; name: string; image: string; rating: number |null|undefined }) => {
  return (
    <div className='movies'>
      <div className='movie-container'>
        <img className='movie-image' src={props.image} alt="" />
        <div className='movie-info'>
        <p>{props.name}</p>
        <p>{props.rating}/10</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDisplay
