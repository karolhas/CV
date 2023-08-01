import { EducationCard } from "./common";
import { FaSchool } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Education() {
  const { t } = useTranslation("common");
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  return (
    <>
      <div className="md:mx-auto md:w-3/4 lg:w-full">
        <div className="col-span-12">
          <h2 className="mb-6 text-3xl font-semibold">
            {Loading ? <Skeleton width={200} /> : t("title.education")}
          </h2>
        </div>
        {Loading ? (
          <Skeleton count={2} height={20} className="my-2" />
        ) : (
          <EducationCard
            svgName={<FaSchool className="mx-auto text-3xl" />}
            caption={t("caption.educationPE")}
            date={"2017 - 2022"}
            description={t("description.educationPEdesc")}
          />
        )}
      </div>
    </>
  );
}

export default Education;
