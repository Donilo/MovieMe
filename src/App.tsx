import MovieCardsHorizontal from "./components/MovieCardsHorizontal";
import Navbar from "./components/Navbar";
import SliderContainer from "./components/SliderContainer";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-dmDarkMode">
      <Navbar />

      <div className="px-2 md:px-10 lg:px-14">
        <SliderContainer />

        <div className="grid grid-cols-1 md:grid-cols-4 flex-row">
          <MovieCardsHorizontal title="Now Playing" />
          <MovieCardsHorizontal title="Trending Movies" />
          <div className="h-56 col-span-1 bg-brand-gradient">
            <div className="m-2 p-10 text-white rounded-xl transition-all duration-500 bg-gradient-to-tl to-yellow-500 via-purple-600 from-red-500 bg-size-200 hover:bg-gradient-to-rt hover:to-black hover:via-yellow-600 hover:from-red-500">
              <p>Hover over me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
