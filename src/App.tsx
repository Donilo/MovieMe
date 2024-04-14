import Navbar from "./components/Navbar";
import SliderContainer from "./components/SliderContainer";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-dmDarkMode">
      <Navbar />

      <div className="px-2 md:px-10 lg:px-14">
        <SliderContainer />

        <div className="grid grid-cols-1 md:grid-cols-4 flex-row bg-slate-600">
          <div className="grid col-span-3">Main</div>
          <div className="h-56 col-span-1 bg-brand-gradient">Sidebar</div>
        </div>
      </div>
    </div>
  );
}

export default App;
