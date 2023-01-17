import { createRef } from "react";
import { useAppContex } from "./context";
import { useOutsideClick } from "./hooks";
import SearchInput from "./components/SearchInput";
import RatingFilter from "./components/RatingFilter";
import GenreFilter from "./components/GenreFilter";
import MovieList from "./components/MovieList";

import styles from "./App.module.scss";

const App = () => {
  const {
    showMovieList,
    setShowMovieList,
    setShowRatingOptions,
    setShowGenreOptions,
  } = useAppContex();

  const ref = createRef();

  const handleDropdownsHide = () => {
    setShowMovieList(false);
    setShowRatingOptions(false);
    setShowGenreOptions(false);
  };

  useOutsideClick(ref, handleDropdownsHide);

  return (
    <div ref={ref} className={styles.root}>
      <div className={styles.searchWrapper}>
        <SearchInput />
        {showMovieList && <MovieList />}
      </div>
      <div className={styles.ratingWrapper}>
        <RatingFilter />
      </div>
      <GenreFilter />
    </div>
  );
};

export default App;
