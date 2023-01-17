import Rating from "../../common/Rating";

import styles from "./MovieItem.module.scss";

const MovieItem = ({ data }) => {
  return (
    <li className={styles.root}>
      <p className={styles.description}>
        <span className={styles.title}>{data.title}</span>
        <span className={styles.category}>{data.category}</span>
      </p>

      <Rating rating={data.rating} />
    </li>
  );
};

export default MovieItem;
