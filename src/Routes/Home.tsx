import { useQuery } from "react-query";
import { getMovies } from "../api";

function Home() {
  const { data, isLoading } = useQuery(["movies", "nowPlaying"], getMovies);
  console.log(data, isLoading);
  return (
    <>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        data.results.map((movie: any) => (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
            />
          </div>
        ))
      )}
    </>
  );
}
export default Home;
