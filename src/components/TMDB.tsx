import tmdbLogo from "../assets/TMDB.svg";

export default function TMDB() {
  return (
    <>
      <img className="opacity-55" src={tmdbLogo} />
      <p className="text-gray-600 mt-2">
        This web application uses TMDB and the TMDB APIs but is not endorsed,
        certified, or otherwise approved by TMDB.
      </p>
    </>
  );
}
