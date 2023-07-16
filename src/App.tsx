import Photo from "./components/Photo";
import Profile from "./components/Profile";
import Language from "./components/Language";
import About from "./components/About";
import Buttons from "./components/Buttons";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="grid min-h-screen grid-cols-12 grid-rows-5 gap-1 bg-slate-200 opacity-50">
      <div className="col-span-3 col-start-1 row-span-2 row-start-1 bg-slate-400">
        {/* <Photo /> */} 1
      </div>
      <div className="col-span-3 col-start-1 row-start-3 bg-slate-400">
        {/* <Profile /> */} 2
      </div>
      <div className="col-span-3 col-start-1 row-start-4 bg-slate-400">
        {/* <Language /> */} 3
      </div>
      <div className="col-span-5 col-start-4 row-span-2 row-start-1 bg-slate-400">
        {/* <About /> */} 4
      </div>
      <div className="col-span-4 col-start-9 row-span-2 row-start-1 bg-slate-400">
        {/* <Buttons /> */} 5
      </div>
      <div className="col-span-9 col-start-4 row-start-3 bg-slate-400">
        {/* <Experience /> */} 6
      </div>
      <div className="col-span-9 col-start-4 row-start-4 bg-slate-400">
        {/* <Education /> */} 7
      </div>
      <div className="col-span-9 col-start-4 row-start-5 bg-slate-400">
        {/* <Skills /> */} 8
      </div>
    </div>
  );
}

export default App;
