import Photo from "./components/Photo";
import Profile from "./components/Profile";
import Buttons from "./components/Buttons";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Language from "./components/Language";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="grid max-h-screen max-w-full grid-cols-12 grid-rows-5 gap-12 bg-slate-200">
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
