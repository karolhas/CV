import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiLogoGmail, BiSolidDownload, BiSolidPrinter } from "react-icons/bi";

import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript, BiLogoReact } from "react-icons/bi";

import Image from "./assets/hsk.png";

function App() {
  return (
    <>
      <div className="container min-h-[200vh] bg-slate-400">
        <section className="p-6 text-center">
          <h1 className="pb-4 text-4xl font-bold">Karol Has</h1>
          <img src={Image} alt="avatar" className="mx-auto w-60 rounded-full" />
          <h2 className="pt-4 text-2xl ">Front-End Developer</h2>
          <p className="font-light">Last update: June 26, 2023</p>
        </section>

        <section className="flex justify-center p-6">
          <ul className="text-lg">
            <li className="flex items-center">
              <BsGithub />
              <p className="px-2">GitHub:</p>
              <a
                href="#"
                className="text-blue-900 hover:text-blue-700 hover:underline"
              >
                github.com/karolhas
              </a>
            </li>

            <li className="flex items-center">
              <BsLinkedin className="text-blue-900" />
              <p className="px-2">LinkedIn: </p>
              <a
                href="#"
                className="text-blue-900 hover:text-blue-700 hover:underline"
              >
                linkedin.com/karolhas
              </a>
            </li>

            <li className="flex items-center">
              <BiLogoGmail className="text-red-700" />
              <p className="px-2">Email:</p>
              <a
                href="#"
                className="text-blue-900 hover:text-blue-700 hover:underline"
              >
                karolhas.kontakt@gmail.com
              </a>
            </li>
            <li className="flex justify-around pt-6 font-semibold">
              <button className="flex items-center gap-x-1 rounded-full bg-gradient-to-r from-blue-400 from-teal-500 to-cyan-500 to-cyan-500 px-2 py-1 hover:bg-gradient-to-l">
                <BiSolidDownload />
                Download CV
              </button>
              <button className="flex items-center gap-x-1 rounded-full bg-gradient-to-r from-blue-400 from-teal-500 to-cyan-500 to-cyan-500 px-2 py-1 hover:bg-gradient-to-l">
                <BiSolidPrinter />
                Print CV
              </button>
            </li>
          </ul>
        </section>

        <section className="p-6">
          <h2 className="text-center text-2xl font-semibold">About</h2>
          <p className="pt-4 text-justify text-lg font-light">
            I am a soldier trying to change my job to what I enjoy. I create
            websites with passion and simplicity. I regularly devote my free
            time to learning new things. I enjoy learning and expanding my
            knowledge. Besides, I actively practice sports and enjoy playing
            computer games.
          </p>
        </section>

        <section>
          <h2 className="text-center text-2xl font-semibold">Technologies</h2>
          <AiFillHtml5 className="text-6xl text-orange-700" />
          <BiLogoCss3 className="text-6xl text-blue-700" />
          <BiLogoJavascript className="text-6xl text-yellow-400" />
          <BiLogoReact className="text-6xl text-blue-500" />
        </section>
      </div>
    </>
  );
}

export default App;
