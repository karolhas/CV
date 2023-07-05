import Header from "./components/Header";
import About from "./components/About";

import { BiLogoGit } from "react-icons/bi";

import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoGithub,
  BiLogoBootstrap,
} from "react-icons/bi";

function App() {
  return (
    <>
      <Header />
      <About />

      <section className="bg-gray-400 p-6 text-center">
        <h2 className="text-2xl font-semibold">Technologies</h2>
        <div className="grid grid-flow-col grid-rows-2 justify-around gap-y-6 pt-6">
          <div>
            <AiFillHtml5 className="text-6xl text-orange-700" />
            <p className="font-light">HTML5</p>{" "}
          </div>
          <div>
            <BiLogoGit className="text-6xl text-orange-700" />
            <p className="font-light">Git</p>{" "}
          </div>

          <div>
            <BiLogoCss3 className="text-6xl text-blue-700" />
            <p className="font-light">CSS3</p>{" "}
          </div>
          <div>
            <BiLogoGithub className="text-6xl text-gray-900" />
            <p className="font-light">Github</p>{" "}
          </div>
          <div>
            <BiLogoJavascript className="mx-auto text-6xl text-yellow-400 " />
            <p className="font-light">Javascript</p>{" "}
          </div>
          <div>
            <BiLogoTailwindCss className="mx-auto text-6xl text-blue-400 " />
            <p className="font-light">TailwindCSS</p>{" "}
          </div>
          <div>
            <BiLogoReact className="mx-auto text-6xl text-blue-500" />
            <p className="font-light">React</p>{" "}
          </div>
          <div>
            <BiLogoBootstrap className="mx-auto text-6xl text-purple-700" />
            <p className="font-light">Bootstrap</p>{" "}
          </div>
        </div>
      </section>

      <section className="bg-orange-300 p-6">
        <h2 className="text-center text-2xl font-semibold">Experience</h2>
        <h3 className="pt-6 text-xl">Back office consultant</h3>
        <p className="text-sm font-light text-gray-600">
          PAYPAL | APRIL 2021 - SEPTEMBER 2021
        </p>
        <ul className="ml-2 list-inside list-disc pt-4 font-light">
          <li>
            Customer indentification with the account by the documents provided
            by him
          </li>
          <li>
            Controlling the security of international customers' transactions
            and fighting signs of illegal activity
          </li>
          <li>
            Changing the personal data of customers after sending the relevant
            documents
          </li>
        </ul>
        <div className="pt-4 text-xs">
          <span className="rounded bg-gradient-to-b from-cyan-400 to-cyan-600 px-1 py-1">
            English B2
          </span>
          <span className="ml-2 rounded bg-gradient-to-b from-cyan-400 to-cyan-600 px-1 py-1">
            Solving problems
          </span>
        </div>
      </section>

      <section className="bg-blue-400 p-6">
        <h2 className="text-center text-2xl font-semibold">Education</h2>
        <h3 className="pt-6 text-xl">Academy of Physical Education</h3>
        <p className="text-sm font-light text-gray-600">
          PHYSICAL EDUCATION | MASTER DEGREE, 2017-2022
        </p>
        <ul className="ml-2 list-inside list-disc pt-4 font-light">
          <li>Certified instructor of acrobatics and gymnastics</li>
        </ul>
        <h3 className="pt-6 text-xl">LO Więcbork</h3>
        <p className="text-sm font-light text-gray-600">
          MATHEMATICS & PHYSICS EXTENDED | 2014-2017
        </p>
      </section>

      <section className="bg-red-400 p-6">
        <h2 className="text-center text-2xl font-semibold">Hobbies</h2>
        <div className="pt-6 text-center">
          <p>photo 1</p>
          <p>photo 2</p>
          <p>photo 3</p>
        </div>
      </section>
    </>
  );
}

export default App;
