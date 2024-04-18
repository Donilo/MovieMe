import logo from "../assets/MovieMe-Logo.png";
// import logo2 from "../assets/MovieMe2.png";

export default function Brand() {
  return (
    <h1 className="flex text-2xl w-auto transition ease-out duration-300 font-bold items-center transform hover:scale-105">
      <a href="#" className="flex text-dmAccentRed dark:text-gray-50">
        <img src={logo} className="w-fit max-h-20" />
        <span className="flex items-center">
          Movie<span className="text-dmDarkMode dark:text-dmAccentRed">M</span>e
          <span className="text-dmDarkMode dark:text-dmAccentRed">!</span>
        </span>
      </a>
    </h1>
  );
}
