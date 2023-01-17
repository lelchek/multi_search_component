import { useAppContex } from "./context";
import SearchInput from "./components/SearchInput";
import RatingFilter from "./components/RatingFilter";
import GenreFilter from "./components/GenreFilter";
import MovieList from "./components/MovieList";

import styles from "./App.module.scss";

const App = () => {
  const { showMovieList } = useAppContex();

  return (
    <div className={styles.root}>
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
