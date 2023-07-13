import { TbBrandPaypalFilled } from "react-icons/tb";

function Experience() {
  return (
    <section id="experience" className="">
      <h2 className="text-3xl font-semibold">Work experience</h2>
      <div className="float-left pt-4">
        <p className="pr-4 pt-2 text-sm font-extrabold italic text-blue-900">
          <TbBrandPaypalFilled className="mx-auto text-3xl text-blue-900" /> Pay
          <span className="text-blue-300">Pal</span>
        </p>
      </div>
      <div className="float-left w-[90%]">
        <p className="pt-6 text-xl font-semibold">
          Back office consultant with English B2
          <span className="float-right mt-2 text-sm font-normal italic text-gray-700">
            04.2021 - 09.2021
          </span>
        </p>
        <div className="col-span-12 my-2 h-[1px] w-full bg-[#383838]"></div>
        <ul className="list-inside list-disc">
          <li>
            Customer indentification with the account by the documents provided
            by him
          </li>
          <li className="my-2">
            Controlling the security of international customers' transactions
            and fighting signs of illegal activity
          </li>
          <li>
            Changing the personal data of customers after sending the relevant
            documents
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
