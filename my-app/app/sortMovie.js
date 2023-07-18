// movieUtils.js
export const sortMoviesByRating = (movies) => {
  const sortedMovies = [...movies].sort((a, b) => b.count - a.count);
  return sortedMovies;
};

