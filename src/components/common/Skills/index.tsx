import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IconType } from "react-icons";

interface SkillProps {
  svgName: IconType;
  skill: string;
  stars: number;
}

export const SkillCard = ({
  svgName,
  skill,
  stars,
}: React.PropsWithChildren<SkillProps>) => {
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
        <div className="px-1">{skill}</div>
        {renderStars()}
      </div>
    </div>
  );
};
