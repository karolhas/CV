// import {
//   BiLogoHtml5,
//   BiLogoCss3,
//   BiLogoJavascript,
//   BiLogoReact,
//   BiLogoTailwindCss,
//   BiLogoBootstrap,
//   BiLogoGit,
// } from "react-icons/bi";

// import { HiUserGroup, HiMicrophone } from "react-icons/hi";
// import { MdReportProblem } from "react-icons/md";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IconType } from "react-icons";

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
  const renderStars = () => {
    const filledStars = Math.min(stars, 3);
    const starIcons: JSX.Element[] = [];

    for (let i = 0; i < filledStars; i++) {
      starIcons.push(<AiFillStar key={i} />);
    }

    for (let i = filledStars; i < 3; i++) {
      starIcons.push(<AiOutlineStar key={i} />);
    }

    return starIcons;
  };
  return (
    <div className="flex w-full flex-col">
      <div className="flex items-center">
        {svgName}
        <div className="px-2">{skill}</div>
        {renderStars()}
      </div>
    </div>
  );
};

export default Skills;
