import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";

interface Date {
  maximum: string;
  minimum: string;
}

interface Movie {
  genre_ids: number[];
  id: number;
  original_title: string;
  title: string;
  release_date: string;
  poster_path: string;
}

interface FetchData {
  dates: Date[];
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchData>("movie/now_playing")
      .then((res) => setMovies(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return { movies, error };
};

export default useMovies;
