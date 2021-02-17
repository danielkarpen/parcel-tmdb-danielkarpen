export default {
  movies: {},
  getMovies() {
    return this.movies.results;
  },
  setMovies(newMovieData) {
    this.movies = { ...this.movies, ...newMovieData };
  },
};
