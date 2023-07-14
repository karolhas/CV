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
    <>
      <div className="grid grid-cols-5 grid-rows-4 gap-4">
        <div className="row-span-4">
          <Photo />
          <Profile />
          <Language />
        </div>
        <div className="col-span-2">
          <About />
        </div>
        <div className="col-span-2 col-start-4">
          <Buttons />
        </div>
        <div className="col-span-4 col-start-2 row-span-2 row-start-2">
          <Experience />
          <Education />
          {/* <Skills /> */}
        </div>
        <div className="col-span-4 col-start-2 row-start-4"></div>
      </div>

      {/* <div className="grid grid-cols-5 grid-rows-1 gap-2">
        <div></div>
        <div className="col-start-1 row-span-2 row-start-2"></div>
        <div className="col-span-2 col-start-2 row-start-1"></div>
        <div className="col-span-2 col-start-4 row-start-1"></div>
        <div className="col-span-4 row-start-2"></div>
        <div className="col-span-4 col-start-2 row-start-3"></div>
        <div className="col-span-4 col-start-2 row-start-4"></div>
      </div> */}
    </>
  );
}

export default App;
