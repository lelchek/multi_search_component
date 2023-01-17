import { Rating as StarRating } from "react-simple-star-rating";
import { StarFill, StarEmpty } from "../icons";

import styles from "./Rating.module.scss";

const Rating = ({ rating }) => {
  return (
    <StarRating
      className={styles.root}
      iconsCount={10}
      size={19}
      fillColor={"#171717"}
      readonly
      allowFraction
      initialValue={rating}
      fillClassName={styles.icon}
      emptyClassName={styles.icon}
      fillIcon={<StarFill />}
      emptyIcon={<StarEmpty />}
    />
  );
};

export default Rating;
