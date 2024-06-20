import React, { useEffect, useState } from "react";
import { ISearchDetails } from "../../types/searchDetailsResults";
import { getSearchDetails } from "../../services/tvMazeServices";
import MovieDisplay from "../MovieDisplay/MovieDisplay";
import './SeachDetails.css'

export type ISearchDetailsState = {
  loading: boolean;
  searchDetails: ISearchDetails[];
  errorMessage: string;
};
const SearchDetails: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [searchData, setSearchData] = useState<ISearchDetailsState>({
    loading: false,
    searchDetails: [] as ISearchDetails[],
    errorMessage: "",
  });
  const [sumbit, setSubmit] = useState(false);
  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setInput(event.target.value)
  //   }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmit(true);
  };
  useEffect(() => {
    setSearchData({
      ...searchData,
      loading: true,
    });
    if (sumbit && input.length > 0) {
      getSearchDetails(input)
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
    console.log(sumbit);
  }, [sumbit, input]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <div className="search-bar"> */}
        <input
        className="input"
          type="name"
          value={input}
          placeholder="Search for series"
          onChange={(event) => setInput(event.target.value)}
        />
        {/* </div> */}
      </form>
      <div>
      {
        searchData.searchDetails.map((data, index) => {
          return (
            <div>
              <MovieDisplay
                key={index}
                id={data.show.id}
                image={data.show.image?.original}
              />
            </div>
          );
        })
      }
      </div>
    </div>
  );
};

export default SearchDetails;
