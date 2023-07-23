import { ButtonsCard } from "./common";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiSolidDownload } from "react-icons/bi";
import PDF from "../assets/CV_Karol_Has.pdf";

function Buttons() {
  return (
    <div className="grid w-full grid-cols-3">
      <div className="cols-span-1">
        <ButtonsCard
          hrefLink={PDF}
          svgName={<BiSolidDownload />}
          caption={"Download PDF"}
          btnStyle="flex cursor-pointer items-center justify-center rounded-lg border-2 border-gray-300 bg-white p-2 shadow-lg duration-300 hover:bg-teal-600 hover:text-white"
          // download?
        />
      </div>
      <div className="cols-span-1">
        <ButtonsCard
          hrefLink={"https://www.linkedin.com/in/karolhas"}
          svgName={<BsLinkedin />}
          caption={"LinkedIn"}
          btnStyle="flex cursor-pointer items-center justify-center rounded-lg border-2 border-gray-300 bg-white p-2 shadow-lg duration-300 hover:bg-blue-700 hover:text-white"
        />
      </div>
      <div className="cols-span-1">
        <ButtonsCard
          hrefLink={"https://github.com/karolhas"}
          svgName={<BsGithub />}
          caption={"Github"}
          btnStyle="flex cursor-pointer items-center justify-center rounded-lg border-2 border-gray-300 bg-white p-2 shadow-lg duration-300 hover:bg-gray-600 hover:text-white"
        />
      </div>
    </div>
  );
}

export default Buttons;
