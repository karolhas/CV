import { TbBrandPaypalFilled } from "react-icons/tb";
import { ExperienceCard } from "./common";
import { useTranslation } from "react-i18next";

import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Experience() {
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
            {Loading ? <Skeleton width={200} /> : t("title.experience")}
          </h2>
        </div>
        {Loading ? (
          <Skeleton count={2} height={20} className="my-2" />
        ) : (
          <ExperienceCard
            svgName={
              <TbBrandPaypalFilled className="mx-auto text-3xl text-blue-900" />
            }
            caption={t("caption.backOfficeWork")}
            date={"04.2021 - 09.2021"}
            description={t("description.backOfficeDesc")}
          />
        )}
      </div>
    </>
  );
}

export default Experience;
