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
    <div className="grid-cols-24 grid grid-rows-5 gap-12 bg-slate-100">
      <div className="col-span-3 col-start-1 row-span-2 row-start-1">
        <Photo />
      </div>
      <div className="col-span-3 col-start-1 row-start-3">
        <Profile />
      </div>
      <div className="col-span-3 col-start-1 row-start-4">
        <Language />
      </div>
      <div className="col-span-5 col-start-4 row-span-2 row-start-1">
        <About />
      </div>
      <div className="col-span-4 col-start-9 row-span-2 row-start-1">
        <Buttons />
      </div>
      <div className="col-span-9 col-start-4 row-start-3">
        <Experience />
      </div>
      <div className="col-span-9 col-start-4 row-start-4">
        <Education />
      </div>
      <div className="col-span-9 col-start-4 row-start-5">
        <Skills />
      </div>
    </div>
  );
}

export default App;
