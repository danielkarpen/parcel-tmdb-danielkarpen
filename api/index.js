import config from "~/config";

console.log(config);

export default {
  show(id) {},

  index() {
    fetch(`https://api.themoviedb.org/3/movie/550?api_key=${config.api.apiKey}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  },
};
