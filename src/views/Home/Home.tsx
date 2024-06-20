import React, { useContext } from "react";
import MovieDisplay from "../../components/MovieDisplay/MovieDisplay";
import "./Home.css";
import { StoreContext } from "../../store/StoreContext";

const Home: React.FC = () => {
  const { shows, categories } = useContext(StoreContext);
  
  const { loading, showsData, errorMessage } = shows;
  return (
    <div className="movie-display" id="movie-display">
      {errorMessage && <p>{errorMessage}</p>}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h2>Movies for you</h2>
          <div className="movie-list">
            {showsData?.map((item, index) => {
              return (
                <MovieDisplay
                  key={index}
                  id={item.id}
                  image={item.image.original}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
