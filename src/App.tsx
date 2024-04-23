import MovieCardsHorizontal from "./components/MovieCardsHorizontal";
import Navbar from "./components/Navbar";
import SliderContainer from "./components/SliderContainer";
import TMDB from "./components/TMDB";

function App() {
  return (
    <div className="font-openSans bg-gray-50 dark:bg-dmDarkMode">
      <Navbar />

      <div className="px-2 md:px-10 lg:px-14">
        <SliderContainer />

        <div className="grid grid-cols-1 md:grid-cols-4 flex-row">
          <div className="md:col-span-3">
            <MovieCardsHorizontal
              title="Now Playing"
              endpoint="/movie/now_playing"
            />
            <MovieCardsHorizontal
              title="Trending"
              endpoint="/trending/all/week"
            />
            <MovieCardsHorizontal
              title="Movies Top Rated"
              endpoint="/movie/top_rated"
            />
            <MovieCardsHorizontal
              title="On The Air"
              endpoint="/tv/on_the_air"
            />
            <MovieCardsHorizontal
              title="TV Shows Top Rated"
              endpoint="/tv/top_rated"
            />
          </div>

          <div className="p-7">
            {/* <div className="m-2 p-10 text-white rounded-xl transition-all duration-500 bg-gradient-to-tl to-yellow-500 via-purple-600 from-red-500 bg-size-200 hover:bg-gradient-to-rt hover:to-black hover:via-yellow-600 hover:from-red-500">
              <p>Hover over me</p>
            </div> */}

            <TMDB />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
