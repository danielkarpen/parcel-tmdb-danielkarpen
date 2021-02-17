function generateImgSrc(path) {
  return `https://image.tmdb.org/t/p/w500${path}`;
}

export default ({ poster_path: posterPath, title }) => `<figure>
<img src="${generateImgSrc(posterPath)}" alt="movie poster" class="rounded"/>
<figcaption class="text-center">${title}</figcaption>
</figure>
`;
