import { BiLogoGmail } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

function Contact() {
  return (
    <>
      <section
        id="contact"
        className="m-4 rounded-xl bg-blue-100 p-4 text-lg shadow-[inset_0px_0px_3px_1px_#1a202c]"
      >
        <h1 className="pb-4 text-center font-roboto text-4xl font-bold">
          Karol Has
        </h1>
        <div className="px-2 font-openSans font-semibold">
          <p className="flex items-center justify-center">
            <MdLocationOn className="text-2xl text-blue-900" />
            <a
              href="https://goo.gl/maps/c8faTSA5vyADFWvV6"
              target="_blank"
              className="ml-1 hover:text-blue-700"
            >
              Więcbork, Poland
            </a>
          </p>
          <p className="my-2 flex items-center justify-center">
            <BiLogoGmail className="text-2xl text-blue-900" />
            <a
              href="mailto:karolhas.kontakt@gmail.com"
              target="_blank"
              className="ml-1 hover:text-blue-700"
            >
              karolhas.kontakt@gmail.com
            </a>
          </p>
          <p className="flex items-center justify-center ">
            <AiFillPhone className="text-2xl text-blue-900" />
            <a
              href="tel:+48733658874"
              target="_blank"
              className="ml-1 hover:text-blue-700"
            >
              (+48) 733-658-874
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Contact;
