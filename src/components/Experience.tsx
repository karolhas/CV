import { TbBrandPaypalFilled } from "react-icons/tb";

function Experience() {
  return (
    <section id="experience" className="m-4 bg-yellow-100 p-6">
      <h2 className="text-3xl font-semibold">Work experience</h2>
      <div className="flex">
        <div className="flex pt-4">
          <p className="pr-4 pt-2 text-sm font-extrabold italic text-blue-900">
            <TbBrandPaypalFilled className="mx-auto text-3xl text-blue-900" />{" "}
            Pay
            <span className="text-blue-300">Pal</span>
          </p>
        </div>
        <div>
          <div className="flex items-end justify-between">
            <p className="pt-6 text-xl font-semibold">
              Back office consultant with English B2
            </p>
            <p className="text-sm italic text-gray-700">04.2021 - 09.2021</p>
          </div>
          <hr className="h-[1px] border-t-0 bg-[#383838] opacity-100" />

          <ul className="list-inside list-disc pt-2">
            <li>
              Customer indentification with the account by the documents
              provided by him
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
      </div>
    </section>
  );
}

export default Experience;
