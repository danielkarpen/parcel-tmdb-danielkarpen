import store from "~./store";
import Card from "./Card";
import Search from "./SearchBar";

function renderCards(movies) {
  return movies.map((movie) => `${Card()} - ${movie.title}`).join();
}

export default () => `<main class="flex justify-center">
  ${Search()}
  ${renderCards(store.getMovies())}
</main>`;
