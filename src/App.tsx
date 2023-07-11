import Photo from "./components/Photo";
import Contact from "./components/Contact";
import Buttons from "./components/Buttons";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="lg:grid-rows-7 lg:grid lg:max-h-screen lg:grid-cols-5">
        <div className="lg:row-span-2">
          <Photo />
        </div>
        <div className="lg:col-start-1 lg:row-span-2 lg:row-start-3">
          <Contact />
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
        <div className="lg:col-span-5 lg:row-start-7">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
