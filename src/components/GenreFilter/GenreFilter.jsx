import { useMemo } from "react";
import { useAppContex } from "../../context";
import { getGenreOptions } from "../../helpers";
import Filter from "../common/Filter";

const GenreFilter = () => {
  const {
    genreFilterValue,
    setGenreFilterValue,
    showGenreOptions,
    setShowRatingOptions,
    setShowGenreOptions,
  } = useAppContex();

  const options = useMemo(() => getGenreOptions(), []);

  const handleFilterClick = () => {
    setShowGenreOptions(!showGenreOptions);
    setShowRatingOptions(false);
  };

  return (
    <Filter
      title="Genre"
      options={options}
      selectedOptions={genreFilterValue}
      setFilter={setGenreFilterValue}
      showDropdown={showGenreOptions}
      onClick={handleFilterClick}
    />
  );
};

export default GenreFilter;
