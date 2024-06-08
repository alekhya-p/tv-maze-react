import React, { useEffect, useState } from "react";
import { AllShowsResults } from "../../types/allShowsResults";
import { getAllShows } from "../../services/tvMazeServices";
import MovieDisplay from "../../components/MovieDisplay/MovieDisplay";
import "./Home.css";

interface AllShowsState {
  loading: boolean;
  showData: AllShowsResults[];
  errorMessage: string;
}
const Home: React.FC = () => {
  const [shows, setShows] = useState<AllShowsState>({
    loading: false,
    showData: [] as AllShowsResults[],
    errorMessage: "",
  });
  useEffect(() => {
    setShows({ ...shows, loading: true });
    getAllShows()
      .then((res) =>
        setShows({
          ...shows,
          loading: false,
          showData: res.data,
        })
      )
      .catch((err) =>
        setShows({
          ...shows,
          loading: false,
          errorMessage: err.message,
        })
      );
    // eslint-disable-next-line
  }, []);
  const { loading, showData, errorMessage } = shows;
  return (
    <div className="movie-display" id="movie-display">
      {errorMessage && <p>{errorMessage}</p>}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h2>Top movies for you</h2>
          <div className="movie-list">
            {showData.map((item, index) => {
              return (
                <MovieDisplay
                  key={index}
                  id={item.id}
                  name={item.name}
                  image={item.image.original}
                  rating={item.rating.average}
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
