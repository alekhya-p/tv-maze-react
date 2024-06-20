import React, { useEffect, useState } from "react";
import { ISearchDetails } from "../../types/searchDetailsResults";
import { getSearchDetails } from "../../services/tvMazeServices";
import MovieDisplay from "../../components/MovieDisplay/MovieDisplay";
import "./SeachDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import NoResults from "../../components/NoResults/NoResults";

export type ISearchDetailsState = {
  loading: boolean;
  searchDetails: ISearchDetails[];
  errorMessage: string;
};
const SearchDetails: React.FC = () => {
    const navigate = useNavigate();
  const params = useParams();
  const [searchData, setSearchData] = useState<ISearchDetailsState>({
    loading: false,
    searchDetails: [] as ISearchDetails[],
    errorMessage: "",
  });
  useEffect(() => {
    setSearchData({
      ...searchData,
      loading: true,
    });
    if (params.query) {
      getSearchDetails(params.query)
        .then((res) => {
          setSearchData({
            ...searchData,
            loading: false,
            searchDetails: res.data,
          });
        })
        .catch((err) => {
          setSearchData({
            ...searchData,
            loading: false,
            errorMessage: err.message,
          });
        });
    }
  }, []);
  const handleCardClick = (showId: number): void => {
    navigate(`/tvShow/${showId}`);
  }
  const renderShows = () => {
    if (searchData.searchDetails.length) {
      return searchData.searchDetails.map(
        (data: ISearchDetails, index: number) => (
            <MovieDisplay
              key={index}
              id={data.show.id}
              image={data.show.image?.original}
              handleClick={(e) => handleCardClick(data.show.id)}
            />
        )
      );
    }
    if(!searchData.loading && !searchData.searchDetails.length) return <NoResults />
  };
  return (
    <div className="searchDetails">
      <h1>Shows for you</h1>
      <div className="search-details">
        {renderShows()}
      </div>
    </div>
  );
};

export default SearchDetails;
