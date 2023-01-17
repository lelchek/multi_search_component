import data from "../moviesData.json";

export const getGenreOptions = () => {
  const genres = [...new Set(data.map((item) => item.category))];
  const genreOptions = genres
    .sort((a, b) => a.localeCompare(b))
    .map((item) => ({
      id: item,
      label: item,
    }));

  return genreOptions;
};
