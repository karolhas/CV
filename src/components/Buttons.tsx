import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiSolidDownload } from "react-icons/bi";
import PDF from "../../public/CV_Karol_Has.pdf";

function Buttons() {
  return (
    <>
      <div className="mx-auto m-10 flex w-[50%] flex-col font-bold">
        <a
          href="https://github.com/karolhas"
          target="_blank"
          className="flex cursor-pointer items-center justify-center rounded-lg bg-white p-2 shadow-lg duration-300 hover:bg-gray-600 hover:text-white"
        >
          <BsGithub />
          <span className="ml-2">Github</span>
        </a>
        <a
          href="https://www.linkedin.com/in/karolhas"
          target="_blank"
          className="my-6 flex cursor-pointer items-center justify-center rounded-lg bg-white p-2 shadow-lg duration-300 hover:bg-blue-700 hover:text-white"
        >
          <BsLinkedin />
          <span className="ml-2">LinkedIn</span>
        </a>
        <a
          href={PDF}
          target="_blank"
          className="flex cursor-pointer items-center justify-center rounded-lg bg-white p-2 shadow-lg duration-300 hover:bg-teal-600 hover:text-white"
          download
        >
          <BiSolidDownload />
          <span className="ml-2">Download PDF</span>
        </a>
      </div>
    </>
  );
}

export default Buttons;
