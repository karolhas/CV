import { SkillCard } from "./common";
import { useTranslation } from "react-i18next";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoGit,
} from "react-icons/bi";
import { HiUserGroup, HiMicrophone } from "react-icons/hi";
import { MdReportProblem } from "react-icons/md";

import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Skills() {
  const { t } = useTranslation("common");
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  return (
    <div className="flex flex-col md:mx-auto md:w-3/4 lg:w-full">
      <h2 className="mb-6 text-3xl font-semibold">
        {Loading ? <Skeleton width={200} /> : t("title.skills")}
      </h2>
      <div className="grid-rows-10 grid grid-cols-1 items-center gap-y-2 text-lg md:grid-cols-2 md:grid-rows-5 lg:grid-cols-5 lg:grid-rows-2 lg:text-base 2xl:text-lg">
        {Loading ? (
          <>
            <Skeleton width={200} />
            <Skeleton width={200} />
            <Skeleton width={200} />
            <Skeleton width={200} />
            <Skeleton width={200} />
            <Skeleton width={200} />
            <Skeleton width={200} />
            <Skeleton width={200} />
            <Skeleton width={200} />
            <Skeleton width={200} />
          </>
        ) : (
          <>
            <SkillCard
              svgName={<BiLogoHtml5 className="text-2xl text-[#e34c26]" />}
              skill={"HTML"}
              stars={2}
            />
            <SkillCard
              svgName={<BiLogoCss3 className="text-2xl text-[#264de4]" />}
              skill={"CSS3"}
              stars={2}
            />
            <SkillCard
              svgName={<BiLogoJavascript className="text-2xl text-[#e8c012]" />}
              skill={"Javascript"}
              stars={1}
            />
            <SkillCard
              svgName={<BiLogoReact className="text-2xl text-[#34a4dc]" />}
              skill={"React"}
              stars={2}
            />
            <SkillCard
              svgName={
                <BiLogoTailwindCss className="text-2xl text-[#709af5]" />
              }
              skill={"TailwindCSS"}
              stars={3}
            />
            <SkillCard
              svgName={<BiLogoBootstrap className="text-2xl text-[#59287a]" />}
              skill={"Bootstrap5"}
              stars={3}
            />
            <SkillCard
              svgName={<BiLogoGit className="text-2xl text-[#f34f29]" />}
              skill={"Git"}
              stars={2}
            />
            <SkillCard
              svgName={<HiUserGroup className="text-2xl text-[#43baf1]" />}
              skill={"Teamwork"}
              stars={3}
            />
            <SkillCard
              svgName={<MdReportProblem className="text-2xl text-[#d3c440]" />}
              skill={"Solving problems"}
              stars={3}
            />
            <SkillCard
              svgName={<HiMicrophone className="text-2xl text-[#7f7d81]" />}
              skill={"Communication"}
              stars={3}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Skills;

// LG: grid grid-cols-5 grid-rows-2 items-center gap-y-3
