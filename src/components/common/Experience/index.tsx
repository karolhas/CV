import { ReactElement } from "react";
import { IconType } from "react-icons";

interface ExperienceProps {
  svgName: ReactElement<IconType>;
  caption: string;
  date: string;
  description: string;
}

export const ExperienceCard = ({
  svgName,
  caption,
  date,
  description,
}: React.PropsWithChildren<ExperienceProps>) => {
  return (
    <div className="col-span-12 flex flex-row">
      <div className="w-16">
        <p className="text-sm font-extrabold italic text-blue-900">
          {svgName}Pay
          <span className="text-blue-300">Pal</span>
        </p>
      </div>
      <div className="w-full">
        <div className="md:grid md:w-full md:grid-cols-2 md:justify-between lg:col-span-11">
          <div className="text-lg lg:text-xl font-semibold lg:col-span-1">{caption}</div>
          <div className="my-1 flex items-center text-sm italic text-gray-700 md:my-0 md:justify-end lg:col-span-1">
            {date}
          </div>
        </div>
        <div className="col-span-12 my-1 h-px w-full bg-[#383838]"></div>
        <div>
          <div>
            <li>{description}</li>
          </div>
        </div>
      </div>
    </div>
  );
};

// LG div that contains {caption}, {date}: col-span-11 grid w-full grid-cols-2 justify-between
// LG date: col-span-1 flex items-center justify-end text-sm font-normal italic text-gray-700
