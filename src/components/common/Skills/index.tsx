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

import { IconType } from "react-icons";
import { createElement } from "react";

interface Skills {
  svgName: IconType;
  skill: string;
  stars: number;
}

export const Skills = ({
  svgName,
  skill,
  stars,
}: React.PropsWithChildren<Skills>) => {
  const IconComponent = createElement(svgName);
  return (
    <>
      <div className="flex w-full flex-col">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <div className="grid grid-cols-5 grid-rows-2 gap-2 text-lg">
          <div className="flex items-center">
            {IconComponent}
            {skill}
            {stars}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
