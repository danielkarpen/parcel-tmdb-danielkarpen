import api from "./api";
import { Main } from "./components";
import store from "./store";

api.index();

const root = document.querySelector("#root");

function render() {
  root.innerHTML = Main();

  root.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(Object.fromEntries(new FormData(e.target)));
  });
}

api.index().then((movies) => {
  store.setMovies(movies);
  render();
});
