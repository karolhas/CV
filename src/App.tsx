import Photo from "./components/Photo";
import Profile from "./components/Profile";
import Language from "./components/Language";
import About from "./components/About";
import Buttons from "./components/Buttons";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/common/Skills";

function App() {
  return (
    <div className="grid-rows-8 grid min-h-screen grid-cols-12 gap-8 p-6">
      <div className="col-span-3 col-start-1 row-span-3 row-start-1">
        <Photo />
      </div>
      <div className="col-span-3 col-start-1 row-start-4">
        <Profile />
      </div>
      <div className="col-span-3 col-start-1 row-start-5">
        <Language />
      </div>
      <div className="col-span-5 col-start-4 row-span-2 row-start-1 flex items-center">
        <About />
      </div>
      <div className="col-span-4 col-start-9 row-span-2 row-start-1 flex items-end">
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
