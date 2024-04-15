import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "a44ac394222f0b8e0ca7e074341395e8",
  },
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDRhYzM5NDIyMmYwYjhlMGNhN2UwNzQzNDEzOTVlOCIsInN1YiI6IjY2MTgwYWNkMGE1MTdjMDE0YWZmNTZmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6fiASR46DIt-0GoB8n-1MWb1ZlpxnNNCI7uZkACHB6g",
  },
});
