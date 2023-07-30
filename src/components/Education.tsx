import { EducationCard } from "./common";
import { FaSchool } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Education() {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="md:mx-auto md:w-3/4 lg:w-full">
        <div className="col-span-12">
          <h2 className="mb-6 text-3xl font-semibold">
            {t("title.education")}
          </h2>
        </div>
        <EducationCard
          svgName={<FaSchool className="mx-auto text-3xl" />}
          caption={t("caption.educationPE")}
          date={"2017 - 2022"}
          description={t("description.educationPEdesc")}
        />
      </div>
    </>
  );
}

export default Education;
