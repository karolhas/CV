import { useState } from "react";
import { SiAlchemy } from "react-icons/si";
import { HiOutlineDownload } from "react-icons/hi";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const Links = [
    { key: "about", name: "ABOUT", link: "/" },
    { key: "technologies", name: "TECHNOLOGIES", link: "/" },
    { key: "experience", name: "EXPERIENCE", link: "/" },
    { key: "education", name: "EDUCATION", link: "/" },
    { key: "hobby", name: "HOBBY", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-10 shadow-lg">
      <div className="items-center justify-between bg-white px-7 py-4 md:flex md:px-8 lg:px-20">
        <div className="align-center flex gap-1 font-firasans text-2xl font-bold italic">
          <SiAlchemy className="h-7 w-7 text-blue-700" />
          <a href="#">
            Portfol<span className="text-blue-700">io</span>
          </a>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-5 h-7 w-7 cursor-pointer md:hidden"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        <ul
          className={`absolute left-0 z-10 flex w-full flex-col bg-white pb-10 transition-all duration-300 ease-in md:static md:z-auto md:flex md:w-auto md:flex-row md:items-center md:pb-0 md:pl-0 ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          {Links.map((link, key) => (
            <li
              key={key}
              className="my-5 text-center font-semibold md:my-0 md:ml-8"
            >
              <a
                href={link.link}
                className="font-poppins text-gray-800 duration-300 hover:text-blue-700"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
