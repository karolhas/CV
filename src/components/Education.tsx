import { FaSchool } from "react-icons/fa";

function Education() {
  return (
    <div className="col-span-12 flex w-full flex-col">
      <div className="col-span-12">
        <h2 className="text-3xl font-semibold">Education</h2>
      </div>
      <div className="col-span-12 flex flex-row">
        <div className="w-16">
          <FaSchool className="mx-auto text-3xl" />
        </div>
        <div className="w-full">
          <div className="col-span-11 grid w-full grid-cols-2">
            <div className="col-span-1 text-xl font-semibold">
              Academy of Physical Education
            </div>
            <div className="col-span-1 flex items-center justify-end text-sm font-normal italic text-gray-700">
              2017 - 2022
            </div>
          </div>
          <div className="col-span-12 h-px w-full bg-[#383838]"></div>
          <div>
            <div>
              <li>Certified instructor of acrobatics and gymnastics</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
