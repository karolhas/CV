import { LanguagesCard } from "./common/Languages";
import { useTranslation } from "react-i18next";

import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Languages() {
  const { t } = useTranslation("common");
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  return (
    <div className="flex flex-col md:mx-auto md:w-3/4 lg:w-full">
      <div>
        <h2 className="mb-3 text-3xl font-semibold">
          {Loading ? <Skeleton width={100} /> : t("title.languages")}
        </h2>
      </div>
      {Loading ? (
        <>
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        <>
          <LanguagesCard
            caption={t("caption.pl")}
            description={t("description.native")}
          />
          <LanguagesCard caption={t("caption.en")} description={"B2"} />
        </>
      )}
    </div>
  );
}

export default Languages;
