import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

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
    const controller = new AbortController();

    apiClient
      .get<FetchData>("/movie/now_playing", { signal: controller.signal })
      .then((res) => setMovies(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { movies, error };
};

export default useMovies;
