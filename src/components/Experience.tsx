import { TbBrandPaypalFilled } from "react-icons/tb";

import { Skills } from "./common";
import { BiLogoHtml5 } from "react-icons/bi";

function Experience() {
  return (
    <div className="flex w-full flex-col">
      <Skills svgName={BiLogoHtml5} skill={"HTML"} stars={0} />

      {/* <div className="col-span-12">
        <h2 className="text-3xl font-semibold">Work experience</h2>
      </div>
      <div className="col-span-12 flex flex-row">
        <div className="w-16">
          <p className="text-sm font-extrabold italic text-blue-900">
            <TbBrandPaypalFilled className="mx-auto text-3xl text-blue-900" />{" "}
            Pay
            <span className="text-blue-300">Pal</span>
          </p>
        </div>
        <div className="w-full">
          <div className="col-span-11 grid w-full grid-cols-2 justify-between">
            <div className="col-span-1 text-xl font-semibold">
              Back office consultant with English B2
            </div>
            <div className="col-span-1 flex items-center justify-end text-sm font-normal italic text-gray-700">
              04.2021 - 09.2021
            </div>
          </div>
          <div className="col-span-12 h-px w-full bg-[#383838]"></div>
          <div>
            <div>
              <li>
                Customer indentification with the account by the documents
                provided by him
              </li>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Experience;
