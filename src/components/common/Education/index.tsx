import { ReactElement } from "react";
import { IconType } from "react-icons";

interface EducationProps {
  svgName: ReactElement<IconType>;
  caption: string;
  date: string;
  description: string;
}

export const EducationCard = ({
  svgName,
  caption,
  date,
  description,
}: React.PropsWithChildren<EducationProps>) => {
  return (
    <div className="flex flex-row">
      <div className="w-16">{svgName}</div>
      <div className="w-full">
        <div className="md:grid md:w-full md:grid-cols-3 md:justify-between">
          <div className="text-lg font-semibold md:col-span-2 lg:text-xl">
            {caption}
          </div>
          <div className="my-1 flex items-center text-sm font-normal italic text-gray-700 md:col-span-1 md:my-0 md:justify-end">
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
