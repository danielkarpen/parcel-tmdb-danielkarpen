export default {
  movies: {},
  getMovies() {
    return this.movies;
  },
  setMovies(newMovieData) {
    this.movies = { ...this.movies, ...newMovieData };
  },
};
