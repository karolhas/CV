import { EducationCard } from "./common";
import { FaSchool } from "react-icons/fa";

function Education() {
  return (
    <>
      <div className="lg:w-full md:mx-auto md:w-3/4">
        <div className="col-span-12">
          <h2 className="mb-6 text-3xl font-semibold">Education</h2>
        </div>
        <EducationCard
          svgName={<FaSchool className="mx-auto text-3xl" />}
          caption={"Academy of Physical Education (Master Degree)"}
          date={"2017 - 2022"}
          description={"Certified instructor of acrobatics and gymnastics"}
        />
      </div>
    </>
  );
}

export default Education;
