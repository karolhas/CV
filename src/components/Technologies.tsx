import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoGit } from "react-icons/bi";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoGithub,
  BiLogoBootstrap,
} from "react-icons/bi";

function Technologies() {
  return (
    <section className="bg-gray-600 p-6 text-center">
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
  );
}

export default Technologies;
