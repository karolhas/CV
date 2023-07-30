import { TbBrandPaypalFilled } from "react-icons/tb";
import { ExperienceCard } from "./common";
import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="md:mx-auto md:w-3/4 lg:w-full">
        <div className="col-span-12">
          <h2 className="mb-6 text-3xl font-semibold">
            {t("title.experience")}
          </h2>
        </div>
        <ExperienceCard
          svgName={
            <TbBrandPaypalFilled className="mx-auto text-3xl text-blue-900" />
          }
          caption={t("caption.backOfficeWork")}
          date={"04.2021 - 09.2021"}
          description={t("description.backOfficeDesc")}
        />
      </div>
    </>
  );
}

export default Experience;
