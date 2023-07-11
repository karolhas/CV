import { BiLogoGmail } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

function Contact() {
  return (
    <>
      <section
        id="contact"
        className="m-4 bg-blue-100 p-4 text-center text-lg shadow-[inset_0px_0px_3px_1px_#1a202c] rounded-xl"
      >
        <h2 className="pb-4 font-poppins text-2xl font-bold">Contact</h2>
        <div className="px-4 font-openSans">
          <p className="flex items-center">
            <MdLocationOn className="text-red-700" />
            <a
              href="https://goo.gl/maps/c8faTSA5vyADFWvV6"
              target="_blank"
              className="ml-1 hover:text-blue-700"
            >
              Więcbork, Poland
            </a>
          </p>
          <p className="my-2 flex items-center">
            <BiLogoGmail className="text-red-700" />
            <a
              href="mailto:karolhas.kontakt@gmail.com"
              target="_blank"
              className="ml-1 underline hover:text-blue-700"
            >
              karolhas.kontakt@gmail.com
            </a>
          </p>
          <p className="flex items-center">
            <AiFillPhone className="text-red-700" />
            <a
              href="tel:+48733658874"
              target="_blank"
              className="ml-1 underline hover:text-blue-700"
            >
              (+48) 733-658-874
            </a>
          </p>
          <p>Coś tu jeszcze dodać?</p>
          <p>Coś tu jeszcze dodać?</p>
          <p>Coś tu jeszcze dodać?</p>
          <p>Coś tu jeszcze dodać?</p>
        </div>
      </section>
    </>
  );
}

export default Contact;
