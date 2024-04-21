import useMovies from "../hooks/useMovies";
import { FaArrowTurnDown } from "react-icons/fa6";
import SkeletonContainer from "./SkeletonCardContainer";
import HorizontalListContainer from "./HorizontalListContainer";
import MovieCardContainer from "./MovieCardItem";

interface Props {
  title: string;
  endpoint: string;
}

export default function MovieCardsHorizontal({ title, endpoint }: Props) {
  const { movies, error, isLoading } = useMovies(endpoint);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className="grid col-span-3 grid-rows-2 overflow-hidden">
        <h1 className="title-lg mt-4 mb-2 text-gray-800 dark:text-gray-100">
          {title}
        </h1>

        <>
          {error && <div className="error-box">{error}</div>}
          <div className="flex justify-end mt-3 mr-1">
            <a
              href="#"
              className="text-lightPink dark:text-gray-500 hover:text-strongPink transform hover:scale-105 transition duration-200 ease-out"
            >
              See More <FaArrowTurnDown className="inline text-xs" />
            </a>
          </div>
          {isLoading && (
            <div className="flex gap-4 p-4">
              {skeletons.map((index) => (
                <SkeletonContainer key={index} />
              ))}
            </div>
          )}
          <HorizontalListContainer>
            {movies.map((movie) => (
              <MovieCardContainer key={movie.id}>
                <a href={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className="absolute w-full object-fit"
                  />
                  <h3 className="absolute bottom-0 title-sm bg-black/20 text-gray-300 p-2">
                    {movie.title}
                  </h3>
                </a>
              </MovieCardContainer>
            ))}
          </HorizontalListContainer>
        </>
      </div>
    </>
  );
}
