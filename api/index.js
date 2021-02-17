import config from "~/config";

export default {
  show(id) {},

  index() {
    let movies = null;

    return fetch(
      `https://api.themoviedb.org/3/movie/550?api_key=${config.api.apiKey}`
    )
      .then((res) => {
        if (res.status === 404) {
          throw new Error("404!");
        }
        return res.json();
      })
      .then((jsonData) => {
        movies = jsonData;
        return movies;
      })
      .catch((err) => {
        console.error(`❗ Got an error:${err}`);
        return err;
      });
  },
};
