import React, { useContext } from 'react'
import { StoreContext } from '../../store/StoreContext'
import MovieDisplay from '../../components/MovieDisplay/MovieDisplay';
import './PopularShows.css'
import { IShowDetails } from '../../types/showDetailsResults';

const PopularShows: React.FC = () => {
   const { popularShows } = useContext(StoreContext);
  return (
    <><h2>Popular Shows for you</h2>
    <div className='popular-shows'>
      {popularShows.map((shows: IShowDetails, index: number) => {
        return (
          <div>
            <MovieDisplay
              key={index}
              id={shows.id}
              image={shows.image.original} />
          </div>
        );
      })}
    </div></>
  )
}

export default PopularShows
