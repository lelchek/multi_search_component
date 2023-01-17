const compareSearch = (searchValue, title) => {
  return title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
};

export const filterBySearch = (data, searchValue) => {
  const filteredData = data.filter(({ title }) =>
    compareSearch(searchValue, title)
  );

  return filteredData;
};

const compareRating = (ratingFilterValue, ratingValue) => {
  const roundedRatingValue = Math.round(Number(ratingValue));

  return ratingFilterValue.includes(roundedRatingValue);
};

export const filterByRating = (data, ratingFilterValue) => {
  if (ratingFilterValue.length === 0) {
    return data;
  }

  return data.filter(({ rating }) => compareRating(ratingFilterValue, rating));
};

export const filterByGenre = (data, genreFilterValue) => {
  if (genreFilterValue.length === 0) {
    return data;
  }

  return data.filter(({ category }) => genreFilterValue.includes(category));
};
