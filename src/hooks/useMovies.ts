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

const useMovies = (endpoint: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    // Set is loading to true to show fetching data is in process
    setIsLoading(true);

    // Make a request to the api server to get desired data
    apiClient
      .get<FetchData>(endpoint, { signal: controller.signal })
      .then((res) => {
        setMovies(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [endpoint]);

  return { movies, error, isLoading };
};

export default useMovies;
