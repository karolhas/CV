import Image from "../assets/hsk.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiLogoGmail, BiSolidDownload, BiSolidPrinter } from "react-icons/bi";

function Header() {
  return (
    <div className="container bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300">
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
    </div>
  );
}

export default Header;
