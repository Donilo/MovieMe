import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-cyan-800 dark:bg-gray-800">
      <Navbar />

      <div className="px-16">
        <div className="bg-zinc-500 h-72 my-9 rounded-md">Slider</div>

        <div className="grid grid-cols-4 flex-row bg-slate-600">
          <div className="grid col-span-3 bg-green-400 hover:bg-green-600">
            Main
          </div>
          <div className="col-span-1 bg-cyan-200">Sidebar</div>
        </div>
      </div>
    </div>
  );
}

export default App;
