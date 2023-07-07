import { useState } from "react";
import { SiAlchemy } from "react-icons/si";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-10 shadow-lg">
      <div className="items-center justify-between bg-white px-7 py-4 md:flex md:px-8 lg:px-20">
        <div className="align-center flex gap-1 font-firasans text-2xl font-bold italic">
          <SiAlchemy className="h-7 w-7 text-blue-700" />
          <HashLink
            smooth
            to="/#"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            Portfol<span className="text-blue-700">io</span>
          </HashLink>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-5 h-7 w-7 cursor-pointer md:hidden"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        <ul
          className={`absolute left-0 z-10 flex w-full flex-col bg-white pb-4 font-poppins shadow-xl transition-all duration-300 ease-in md:static md:z-auto md:flex md:w-auto md:flex-row md:items-center md:pb-0 md:pl-0 ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          <li className="my-5 text-center font-semibold md:my-0 md:ml-8">
            <HashLink
              smooth
              to="/#about"
              className="text-gray-800 duration-300 hover:text-blue-700"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            >
              About
            </HashLink>
          </li>
          <li className="my-5 text-center font-semibold md:my-0 md:ml-8">
            <HashLink
              smooth
              to="/#technologies"
              className="text-gray-800 duration-300 hover:text-blue-700"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            >
              Technologies
            </HashLink>
          </li>
          <li className="my-5 text-center font-semibold md:my-0 md:ml-8">
            <HashLink
              smooth
              to="/#experience"
              className="text-gray-800 duration-300 hover:text-blue-700"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            >
              Experience
            </HashLink>
          </li>
          <li className="my-5 text-center font-semibold md:my-0 md:ml-8">
            <HashLink
              smooth
              to="/#education"
              className="text-gray-800 duration-300 hover:text-blue-700"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            >
              Education
            </HashLink>
          </li>
          <li className="my-5 text-center font-semibold md:my-0 md:ml-8">
            <HashLink
              smooth
              to="/#projects"
              className="text-gray-800 duration-300 hover:text-blue-700"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            >
              Projects
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
