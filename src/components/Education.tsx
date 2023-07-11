import { GiGraduateCap } from "react-icons/gi";

function Education() {
  return (
    <section
      id="education"
      className="m-4 rounded-xl bg-green-100  p-4 font-openSans shadow-[inset_0px_0px_3px_1px_#1a202c]"
    >
      <h2 className="text-center font-roboto text-2xl font-bold">Education</h2>
      <h3 className="flex items-center pt-6 text-xl font-semibold">
        <GiGraduateCap className="mr-1 text-2xl text-blue-800" /> Academy of
        Physical Education
      </h3>
      <p className="text-sm text-gray-800">
        PHYSICAL EDUCATION | MASTER DEGREE, 2017-2022
      </p>
      <ul className="ml-2 list-inside list-disc pt-4">
        <li>Certified instructor of acrobatics and gymnastics</li>
      </ul>
      <h3 className="flex items-center pt-6 text-xl font-semibold">
        <GiGraduateCap className="mr-1 text-2xl text-blue-800" />
        LO Więcbork
      </h3>
      <p className="text-sm text-gray-800">
        MATHEMATICS & PHYSICS EXTENDED | 2014-2017
      </p>
    </section>
  );
}

export default Education;
