import { useAppContex } from "../../context";
import Dropdown from "../common/Dropdown";
import MovieItem from "./MovieItem";

import styles from "./MovieList.module.scss";

const MovieList = () => {
  const { data } = useAppContex();

  return (
    <Dropdown className={styles.dropdown}>
      {data.length > 0 ? (
        data.map((item) => <MovieItem key={item.title} data={item} />)
      ) : (
        <p>No result...</p>
      )}
    </Dropdown>
  );
};

export default MovieList;
