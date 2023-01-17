import { useMemo } from "react";
import { useAppContex } from "../../context";
import Filter from "../common/Filter";
import Rating from "../common/Rating";
import { getRatingValues } from "../../helpers";

const RatingFilter = () => {
  const {
    ratingFilterValue,
    setRatingFilterValue,
    showRatingOptions,
    setShowRatingOptions,
    setShowGenreOptions,
  } = useAppContex();

  const options = useMemo(() => {
    const rating = getRatingValues();

    return rating.map((value) => ({
      id: value,
      label: <Rating rating={value} />,
    }));
  }, []);

  const handleFilterClick = () => {
    setShowRatingOptions(!showRatingOptions);
    setShowGenreOptions(false);
  };

  return (
    <Filter
      title="Rating"
      options={options}
      selectedOptions={ratingFilterValue}
      setFilter={setRatingFilterValue}
      showDropdown={showRatingOptions}
      onClick={handleFilterClick}
    />
  );
};

export default RatingFilter;
