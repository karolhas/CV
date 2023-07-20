import { EducationCard } from "./common";
import { FaSchool } from "react-icons/fa";

function Education() {
  return (
    <>
      <div className="col-span-12">
        <h2 className="mb-3 text-3xl font-semibold">Education</h2>
      </div>
      <EducationCard
        svgName={<FaSchool className="mx-auto text-3xl" />}
        caption={"Academy of Physical Education (Master Degree)"}
        date={"2017 - 2022"}
        description={"Certified instructor of acrobatics and gymnastics"}
      />
    </>
  );
}

export default Education;
