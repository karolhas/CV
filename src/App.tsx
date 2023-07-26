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
    <div className="lg:grid-rows-8 p-8 lg:grid lg:min-h-screen lg:grid-cols-12 lg:content-center lg:gap-8 lg:p-6">
      <div className="mb-12 lg:col-span-3 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mb-0">
        <Photo />
      </div>
      <div className="mb-12 lg:col-span-3 lg:col-start-1 lg:row-start-4 lg:mb-0 lg:px-4">
        <Profile />
      </div>
      <div className="mb-12 lg:col-span-3 lg:col-start-1 lg:row-start-5 lg:mb-0 lg:px-4">
        <Language />
      </div>
      <div className="mb-12 lg:col-span-5 lg:col-start-4 lg:row-span-2 lg:row-start-1 lg:mb-0 lg:flex lg:items-center">
        <About />
      </div>
      <div className="mb-12 lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1 lg:mb-0 lg:flex lg:items-end lg:pr-2">
        <Buttons />
      </div>
      <div className="mb-12 lg:col-span-9 lg:col-start-4 lg:row-start-3 lg:mb-0 lg:pr-2">
        <Experience />
      </div>
      <div className="mb-12 lg:col-span-9 lg:col-start-4 lg:row-start-4 lg:mb-0 lg:flex lg:flex-col lg:justify-center lg:pr-2">
        <Education />
      </div>
      <div className="lg:col-span-9 lg:row-start-5 lg:pr-2">
        <Skills />
      </div>
    </div>
  );
}

export default App;
