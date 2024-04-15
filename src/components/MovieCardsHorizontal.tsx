import useMovies from "../hooks/useMovies";
import { FaArrowTurnDown } from "react-icons/fa6";

export default function MovieCardsHorizontal() {
  const { movies, error } = useMovies();

  return (
    <>
      <div className="grid col-span-3 grid-rows-2 overflow-hidden">
        <h1 className="title-lg mt-4 mb-4 text-gray-800 dark:text-gray-100">
          Now Playing
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
          <ul className="flex gap-4 -mt-7 mb-2 overflow-x-scroll scrollbar dark:scrollbar-dark">
            {movies.map((movie) => (
              <li
                key={movie.id}
                className="relative min-w-48 h-52 bg-slate-500 mb-2 rounded-xl cursor-pointer shadow-md dark:shadow-none"
              >
                <h3 className="absolute bottom-0 title-sm text-gray-300 p-2">
                  {movie.title}
                </h3>
              </li>
            ))}
          </ul>
        </>
      </div>
    </>
  );
}
