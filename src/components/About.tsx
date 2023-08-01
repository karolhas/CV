import { useTranslation } from "react-i18next";

import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function About() {
  const { t } = useTranslation("common");
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  return (
    <>
      <div className="flex flex-col md:mx-auto md:w-3/4 lg:w-full">
        <div>
          <h1 className="mb-6 text-center text-5xl font-bold lg:text-left">
            {Loading ? <Skeleton width={200} /> : "Karol Has"}
          </h1>
        </div>
        <div>
          <p className="text-justify text-lg">
            {Loading ? (
              <Skeleton className="w-full" count={4} />
            ) : (
              t("description.about")
            )}
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
