import api from "./api";
import { Search } from "./components";

api.index();

const root = document.querySelector("#root");

function render() {
  root.innerHTML = Search();
}

render();
