import { useState } from "react";
import { SiAlchemy } from "react-icons/si";
import { HiOutlineDownload } from "react-icons/hi";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const Links = [
    { name: "ABOUT", link: "/" },
    { name: "TECHNOLOGIES", link: "/" },
    { name: "EXPERIENCE", link: "/" },
    { name: "EDUCATION", link: "/" },
    { name: "HOBBY", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 shadow">
      <div className="items-center justify-between bg-white px-7 py-4 md:flex md:px-10">
        <div className="flex cursor-pointer items-center gap-1 text-2xl font-bold">
          <SiAlchemy className="h-7 w-7 text-blue-700" />
          <span>
            Portfol<span className="text-blue-700">io</span>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 h-7 w-7 cursor-pointer md:hidden"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        <ul
          className={`absolute left-0 z-[-1] flex w-full flex-col bg-white pb-10 transition-all duration-300 ease-in md:static md:z-auto md:flex md:w-auto md:flex-row md:items-center md:pb-0 md:pl-0 ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="my-5 text-center font-semibold md:my-0 md:ml-8">
              <a
                href={link.link}
                className="text-gray-800 duration-300 hover:text-blue-500"
              >
                {link.name}
              </a>
            </li>
          ))}

          <button className="mx-auto mt-2 flex w-40 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 p-1.5 font-semibold text-white duration-500 md:static md:ml-8 md:mt-0">
            <HiOutlineDownload className="mr-2" />
            Download CV
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
