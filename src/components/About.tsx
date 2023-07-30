import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="flex flex-col md:mx-auto md:w-3/4 lg:w-full">
        <div>
          <h1 className="mb-6 text-center text-5xl font-bold lg:text-left">
            Karol Has
          </h1>
        </div>
        <div>
          <p className="text-justify text-lg">{t("description.about")}</p>
        </div>
      </div>
    </>
  );
}

export default About;
