import Photo from "./components/Photo";
import Profile from "./components/Profile";
import Buttons from "./components/Buttons";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="lg:grid-rows-7 lg:grid lg:max-h-screen lg:grid-cols-5">
        <div className="lg:row-span-2">
          <Photo />
        </div>
        <div className="lg:col-start-1 lg:row-span-2 lg:row-start-3">
          <Profile />
        </div>
        <div className="lg:col-start-1 lg:row-span-2 lg:row-start-5">
          <Buttons />
        </div>
        <div className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <About />
        </div>
        <div className="lg:col-span-2 lg:col-start-4 lg:row-span-2 lg:row-start-1">
          <Skills />
        </div>
        <div className="lg:col-span-4 lg:col-start-2 lg:row-span-2 lg:row-start-3">
          <Experience />
        </div>
        <div className="lg:col-span-4 lg:row-span-2 lg:row-start-5">
          <Education />
        </div>
      </div>
    </>
  );
}

export default App;
