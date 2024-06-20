import React from 'react'
import './MovieDisplay.css'

interface Props {
  key: number,
  id: number,
  image: string | undefined,
  handleClick: (event:React.MouseEvent<HTMLDivElement>) => void;
}
const MovieDisplay: React.FC<Props> = ({
  key,
  id,
  image,
  handleClick
}) => {
  return (
    <div className='movies' onClick={handleClick}>
      <div className='movie-container'>
        <img className='movie-image' src={image} alt="" />
        {/* <div className='movie-info'>
        <p>{props.name}</p>
        <p>{props.rating}/10</p>
        </div> */}
      </div>
    </div>
  )
}

export default MovieDisplay
