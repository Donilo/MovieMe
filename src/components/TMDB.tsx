import tmdbLogo from "../assets/TMDB.svg";

export default function TMDB() {
  return (
    <div className="grid grid-cols-2 md:grid md:grid-cols-1">
      <img className="w-24 opacity-65" src={tmdbLogo} />
      <p className="text-gray-600 mt-2 ml-4 md:ml-0">
        This web application uses TMDB and the TMDB APIs but is not endorsed,
        certified, or otherwise approved by TMDB.
      </p>
    </div>
  );
}
