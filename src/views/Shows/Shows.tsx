import React, { useContext } from 'react'
import { ICategories, StoreContext } from '../../store/StoreContext'
import MovieDisplay from '../../components/MovieDisplay/MovieDisplay'
import './Shows.css'

const Shows:React.FC = () => {
  const { categories } = useContext(StoreContext)
  return (
    <div>
      <div className='Shows-list'>
        {categories.map((shows: ICategories) => {
          return (
            <div>
              <h2>{shows.name}</h2>
              <div className='show-genres-list'>
                {shows.filteredShows.map((showGenres, index) => {
                  return (
                    <div>
                      <div>
                      {/* <MovieDisplay
                      key={index}
                      id={showGenres.id}
                      image={showGenres.image.original} /> */}
                      <img className="show-genres-img" src={showGenres.image.original} alt="" />
                    </div>
                    </div>
                  )
                })}
              </div>
            </div>
            // <p>{shows.name}</p>            
            // <img src={} alt="" />
          );
        })}
      </div>
    </div>
  )
}

export default Shows
