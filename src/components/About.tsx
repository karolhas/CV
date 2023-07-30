import { useTranslation } from "react-i18next";

function About() {
  const { t, i18n } = useTranslation("common");

  return (
    <>
      <div className="flex lg:w-full flex-col md:w-3/4 md:mx-auto">
        <div>
          <h1 className="mb-6 text-center text-5xl font-bold lg:text-left">
            Karol Has
          </h1>
        </div>
        <div>
          <p className="text-lg text-justify">
            {t("description.about")}
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
