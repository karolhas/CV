function Experience() {
  return (
    <section className="my-6 bg-orange-300 p-6 font-montserrat shadow-inner">
      <h2 className="text-center text-2xl font-semibold">Experience</h2>
      <h3 className="pt-6 text-xl">Back office consultant</h3>
      <p className="text-sm font-light text-gray-700">
        PAYPAL | APRIL 2021 - SEPTEMBER 2021
      </p>
      <ul className="ml-3 list-inside list-disc pt-4 font-light">
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
      <div className="pt-6 text-xs">
        <span className="rounded bg-gradient-to-b from-cyan-400 to-cyan-600 px-1 py-1 shadow-inner">
          English B2
        </span>
        <span className="ml-2 rounded bg-gradient-to-b from-cyan-400 to-cyan-600 px-1 py-1">
          Solving problems
        </span>
      </div>
    </section>
  );
}

export default Experience;
