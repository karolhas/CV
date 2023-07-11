import { TbBrandPaypalFilled } from "react-icons/tb";

function Experience() {
  return (
    <section
      id="experience"
      className="m-4 bg-orange-100 p-4 font-openSans shadow-[inset_0px_0px_3px_1px_#1a202c] rounded-xl"
    >
      <h2 className="text-center text-2xl font-bold">Experience</h2>
      <h3 className="pt-6 text-xl font-semibold flex items-center">
        <TbBrandPaypalFilled className="text-2xl text-blue-800" /> Back office
        consultant
      </h3>
      <p className="text-sm text-gray-700">
        PAYPAL | APRIL 2021 - SEPTEMBER 2021
      </p>
      <ul className="ml-3 list-inside list-disc pt-4">
        <li>
          Customer indentification with the account by the documents provided by
          him
        </li>
        <li className="my-4">
          Controlling the security of international customers' transactions and
          fighting signs of illegal activity
        </li>
        <li>
          Changing the personal data of customers after sending the relevant
          documents
        </li>
      </ul>
      <div className="pt-6 text-sm">
        <span className="rounded bg-cyan-400 px-1 py-1 shadow-[0px_1px_2px_0px_#000261]">
          English B2
        </span>
        <span className="ml-2 rounded bg-cyan-400 px-1 py-1 shadow-[0px_1px_2px_0px_#000261]">
          Solving problems
        </span>
      </div>
    </section>
  );
}

export default Experience;
