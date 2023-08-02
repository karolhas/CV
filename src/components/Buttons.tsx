import { ButtonsCard } from "./common";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiSolidDownload } from "react-icons/bi";
import { useTranslation } from "react-i18next";

import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Buttons() {
  const { t } = useTranslation("common");
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  });

  return (
    <div className="mx-auto w-52 2xl:grid 2xl:w-full 2xl:grid-cols-3">
      {Loading ? (
        <>
          <Skeleton width={"90%"} height={"180%"} />
          <Skeleton width={"90%"} height={"180%"} />
          <Skeleton width={"90%"} height={"180%"} />
        </>
      ) : (
        <>
          <div className="cols-span-1">
            <ButtonsCard
              hrefLink={t("link.translatedCV")}
              svgName={<BiSolidDownload />}
              caption={t("caption.downloadPDF")}
              btnStyle="flex cursor-pointer items-center justify-center rounded-lg border-2 border-gray-300 bg-white p-2 shadow-lg duration-300 hover:bg-teal-600 hover:text-white "
            />
          </div>
          <div className="cols-span-1 my-4 2xl:mx-2 2xl:my-0">
            <ButtonsCard
              hrefLink={"https://www.linkedin.com/in/karolhas"}
              svgName={<BsLinkedin />}
              caption={"LinkedIn"}
              btnStyle="flex cursor-pointer items-center justify-center rounded-lg border-2 border-gray-300 bg-white p-2 shadow-lg duration-300 hover:bg-blue-700 hover:text-white"
            />
          </div>
          <div className="cols-span-1">
            <ButtonsCard
              hrefLink={"https://github.com/karolhas"}
              svgName={<BsGithub />}
              caption={"Github"}
              btnStyle="flex cursor-pointer items-center justify-center rounded-lg border-2 border-gray-300 bg-white p-2 shadow-lg duration-300 hover:bg-gray-600 hover:text-white"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Buttons;
