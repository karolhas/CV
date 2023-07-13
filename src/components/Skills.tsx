import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoGit,
} from "react-icons/bi";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { HiUserGroup, HiMicrophone } from "react-icons/hi";
import { MdReportProblem } from "react-icons/md";

function Skills() {
  return (
    <>
      <section className="">
        <div className="px-4">
          <h2 className="pb-4 text-3xl font-semibold">Skills</h2>
          <div className="grid grid-cols-5 grid-rows-2 gap-4 text-lg">
            <div className="flex items-center">
              <BiLogoHtml5 className="mr-1 text-xl text-orange-700" />
              HTML
              <AiFillStar className="ml-2" />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <div className="col-start-1 row-start-2 flex items-center">
              <BiLogoCss3 className="mr-1 text-xl text-blue-700" />
              CSS
              <AiFillStar className="ml-2" />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <div className="col-start-2 row-start-1 flex items-center">
              <BiLogoJavascript className="mr-1 text-xl text-yellow-500" />
              Javascript
              <AiFillStar className="ml-2" />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
            <div className="col-start-2 row-start-2 flex items-center">
              <BiLogoReact className="mr-1 text-xl text-blue-500" />
              React
              <AiFillStar className="ml-2" />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <div className="col-start-3 row-start-1 flex items-center">
              <BiLogoTailwindCss className="mr-1 text-xl text-blue-400" />
              TailwindCSS
              <AiFillStar className="ml-2" />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="col-start-3 row-start-2 flex items-center">
              <BiLogoBootstrap className="mr-1 text-xl text-violet-500" />
              Bootstrap
              <AiFillStar className="ml-2" />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="col-start-4 row-start-1 flex items-center">
              <BiLogoGit className="mr-1 text-xl text-red-500" />
              Git
              <AiFillStar className="ml-2" />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <div className="col-start-4 row-start-2 flex items-center">
              <HiUserGroup className="mr-1 text-xl text-gray-500" />
              Teamwork
              <AiFillStar className="ml-2" />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="col-start-5 row-start-1 flex items-center">
              <MdReportProblem className="mr-1 text-xl text-yellow-600" />
              Problem solving
              <AiFillStar className="ml-2" />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="flex items-center">
              <HiMicrophone className="mr-1 text-xl text-gray-500" />
              Communication skills
              <AiFillStar className="ml-2" />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
