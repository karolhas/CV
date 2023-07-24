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
    <div className="p-6">
      <div className="mb-6">
        <Photo />
      </div>
      <div className="mb-6">
        <Profile />
      </div>
      <div className="mb-6">
        <Language />
      </div>
      <div className="mb-6">
        <About />
      </div>
      <div className="mb-6">
        <Buttons />
      </div>
      <div className="mb-6">
        <Experience />
      </div>
      <div className="mb-6">
        <Education />
      </div>
      <div className="">
        <Skills />
      </div>
    </div>
  );
}

// LG SCREEN: grid-rows-8 grid min-h-screen grid-cols-12 content-center gap-8 p-6
// LG PHOTO: col-span-3 col-start-1 row-span-3 row-start-1
// LG PROFILE: col-span-3 col-start-1 row-start-4 px-3
// LG LANGUAGE: col-span-3 col-start-1 row-start-5 px-3
// LG ABOUT: col-span-5 col-start-4 row-span-2 row-start-1 flex items-center
// LG BUTTONS: col-span-4 col-start-9 row-span-2 row-start-1 flex items-end
// LG EXPERIENCE: col-span-9 col-start-4 row-start-3
// LG EDUCATION: col-span-9 col-start-4 row-start-4 flex flex-col justify-center
// LG SKILLS:

export default App;
