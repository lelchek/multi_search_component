import { useState, createContext, useContext, useEffect } from "react";
import moviesData from "../moviesData.json";
import { filterBySearch, filterByRating, filterByGenre } from "../helpers";

const initialState = {
  data: moviesData,
  searchValue: "",
  ratingFilterValue: [],
  genreFilterValue: [],
  showMovieList: false,
  showRatingOptions: false,
  showGenreOptions: false,
};

export const AppContex = createContext({});

export const useAppContex = () => useContext(AppContex);

export const AppProvider = ({ children }) => {
  const [appContext, setAppContext] = useState(initialState);
  const { searchValue, ratingFilterValue, genreFilterValue } = appContext;

  useEffect(() => {
    const filteredDataBySearch = filterBySearch(moviesData, searchValue);
    const filteredDataByRating = filterByRating(
      filteredDataBySearch,
      ratingFilterValue
    );
    const filteredDataByGenre = filterByGenre(
      filteredDataByRating,
      genreFilterValue
    );

    setAppContext((state) => ({
      ...state,
      data: filteredDataByGenre,
    }));
    // eslint-disable-next-line
  }, [searchValue, ratingFilterValue, genreFilterValue]);

  const setSearchValue = (value) => {
    setAppContext((state) => ({
      ...state,
      searchValue: value,
    }));
  };

  const setRatingFilterValue = (value) => {
    setAppContext((state) => ({
      ...state,
      ratingFilterValue: value,
    }));
  };

  const setGenreFilterValue = (value) => {
    setAppContext((state) => ({
      ...state,
      genreFilterValue: value,
    }));
  };

  const setShowMovieList = (value) => {
    setAppContext((state) => ({
      ...state,
      showMovieList: value,
    }));
  };

  const setShowRatingOptions = (value) => {
    setAppContext((state) => ({
      ...state,
      showRatingOptions: value,
    }));
  };

  const setShowGenreOptions = (value) => {
    setAppContext((state) => ({
      ...state,
      showGenreOptions: value,
    }));
  };

  const state = {
    ...appContext,
    setSearchValue,
    setRatingFilterValue,
    setGenreFilterValue,
    setShowMovieList,
    setShowRatingOptions,
    setShowGenreOptions,
  };

  return <AppContex.Provider value={state}>{children}</AppContex.Provider>;
};
