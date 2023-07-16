import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiSolidDownload } from "react-icons/bi";
import PDF from "../assets/CV_Karol_Has.pdf";

function Buttons() {
  return (
    <div className="grid w-full grid-cols-3">
      <div className="cols-span-1">
        <a
          href={PDF}
          target="_blank"
          className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-gray-300 bg-white p-2 shadow-lg duration-300 hover:bg-teal-600 hover:text-white"
          download
        >
          <BiSolidDownload />
          <span className="ml-2">Download PDF</span>
        </a>
      </div>
      <div className="cols-span-1">
        <a
          href="https://www.linkedin.com/in/karolhas"
          target="_blank"
          className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-gray-300 bg-white p-2 shadow-lg duration-300 hover:bg-blue-700 hover:text-white"
        >
          <BsLinkedin />
          <span className="ml-2">LinkedIn</span>
        </a>
      </div>
      <div className="cols-span-1">
        <a
          href="https://github.com/karolhas"
          target="_blank"
          className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-gray-300 bg-white p-2 shadow-lg duration-300 hover:bg-gray-600 hover:text-white"
        >
          <BsGithub />
          <span className="ml-2">Github</span>
        </a>
      </div>
    </div>
  );
}

export default Buttons;
