import { LanguagesCard } from "./common/Languages";
import { useTranslation } from "react-i18next";

function Languages() {
  const { t, i18n } = useTranslation("common");

  return (
    <div className="flex flex-col md:mx-auto md:w-3/4 lg:w-full">
      <div>
        <h2 className="mb-3 text-3xl font-semibold">{t("title.languages")}</h2>
      </div>
      <LanguagesCard
        caption={t("caption.pl")}
        description={t("description.native")}
      />
      <LanguagesCard caption={t("caption.en")} description={"B2"} />
    </div>
  );
}

export default Languages;
