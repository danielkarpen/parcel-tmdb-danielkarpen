import store from "~/store";
import Card from "./Card";
import Search from "./SearchBar";

function renderCards(movies) {
  return movies.map((movie) => Card(movie)).join("\n");
}

export default () => `<main class="container mx-auto flex flex-col items-center gap-4">
  ${Search()}
  <div class="grid grid-cols-5 gap-4">
  ${renderCards(store.getMovies())}
  </div>
</main>`;
