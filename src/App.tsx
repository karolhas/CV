import Image from "./assets/hsk.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import {
  BiLogoGmail,
  BiSolidDownload,
  BiSolidPrinter,
  BiLogoGit,
} from "react-icons/bi";

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
      <div className="container min-h-[200vh] bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300">
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
          <p className="pt-6 text-justify text-lg font-light">
            I am a soldier trying to change my job to what I enjoy. I create
            websites with passion and simplicity. I regularly devote my free
            time to learning new things. I enjoy learning and expanding my
            knowledge. Besides, I actively practice sports and enjoy playing
            computer games.
          </p>
        </section>

        <section className="p-6 text-center">
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
              <BiLogoReact className="text-6xl text-blue-500" />
              <p className="font-light">React</p>{" "}
            </div>
            <div>
              <BiLogoBootstrap className="mx-auto text-6xl text-purple-700" />
              <p className="font-light">Bootstrap</p>{" "}
            </div>
          </div>
        </section>

        <section className="p-6">
          <h2 className="text-center text-2xl font-semibold">Experience</h2>
          <h3 className="pt-6 text-xl">Back office consultant</h3>
          <p className="text-sm font-light text-gray-600">
            PAYPAL | APRIL 2021 - SEPTEMBER 2021
          </p>
          <ul className="ml-2 list-inside list-disc pt-4 font-light">
            <li>
              Customer indentification with the account by the documents
              provided by him
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
      </div>
    </>
  );
}

export default App;
