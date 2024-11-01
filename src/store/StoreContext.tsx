import React, { createContext, useEffect, useRef, useState } from "react";
import { getAllShows } from "../services/tvMazeServices";
import { AllShowsResults } from "../types/allShowsResults";

export type AllShowsState = {
  loading: boolean;
  showsData: AllShowsResults[];
  errorMessage: string;
};
export interface ShowsInterface {
  shows: AllShowsState;
  setShows: React.Dispatch<React.SetStateAction<AllShowsState>>;
}
const defaultStore = {
  shows: {} as AllShowsState,
  setShows: (shows: AllShowsState) => {},
};
export type ICategories = {
  name: string;
  filteredShows: AllShowsResults[];
};
export const StoreContext = createContext(defaultStore);

export const StoreContextProvider: React.FC = (props) => {
  const [shows, setshows] = useState<AllShowsState>({
    loading: false,
    showsData: [] as AllShowsResults[],
    errorMessage: "",
  });
  useEffect(() => {
    setshows({
      ...shows,
      loading: true,
    });
    getAllShows()
      .then((res) =>
        setshows({
          ...shows,
          loading: false,
          showsData: res.data,
        })
      )
      .catch((err) =>
        setshows({
          ...shows,
          loading: false,
          errorMessage: err.message,
        })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const allGenres = shows.showsData.map((show) => show.genres).flat();
  const uniqueGenres = [...new Set(allGenres)];
  const categories = uniqueGenres.map((genres) => {
    const filteredShows = shows.showsData.filter((show) =>
      show.genres?.includes(genres as string)
    );
    return {
      name: genres,
      filteredShows,
    } as ICategories;
  });
  const popularShows: string[] = [];

  shows.showsData.forEach((showsList) => {
    if (showsList.rating.average >= 8) {
      popularShows.push(showsList);
    }
  });
  
  //   const filteredShows = shows.showsData.map()
  const contextValue = {
    setshows,
    shows,
    allGenres,
    uniqueGenres,
    categories,
    popularShows,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
