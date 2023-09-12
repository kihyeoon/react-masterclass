const apiKey = process.env.REACT_APP_API_KEY;
const BASE_PATH = "https://api.themoviedb.org/3";

export function getMovies() {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${apiKey}&language=kr&page=1&region=kr`
  ).then((response) => response.json());
}
