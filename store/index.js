export default {
  movies: [],
  getMovies() {
    return this.movies;
  },
  setMovies(newMovies) {
    // 'concat' is 'non-mutating'
    this.movies = this.movies.concat(newMovies);
  },
};
