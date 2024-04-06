import "./App.css";

function App() {
  return (
    <>
      <div className="bg-neutral-600">Navbar</div>

      <div className="bg-zinc-500 h-72 my-7 rounded-md">Slider</div>

      <div className="flex flex-row bg-slate-600">
        <div className="basis-3/4 bg-green-400 hover:bg-green-600">Main</div>
        <div className="basis-1/4 bg-cyan-200">Sidebar</div>
      </div>
    </>
  );
}

export default App;
