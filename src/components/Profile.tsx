import { ProfileCard } from "./common/Profile";
import { useTranslation } from "react-i18next";

function Profile() {
  const { t } = useTranslation("common");

  return (
    <div className="flex flex-col md:mx-auto md:w-3/4 lg:w-full">
      <div>
        <h2 className="mb-3 text-3xl font-semibold">{t("title.profile")}</h2>
      </div>
      <ProfileCard caption={t("caption.name")} description={"Karol Has"} />
      <ProfileCard
        caption={t("caption.address")}
        description={"Więcbork, Poland"}
      />
      <ProfileCard
        caption={t("caption.phone")}
        description={"+48 733 658 874"}
      />
      <ProfileCard caption={t("caption.drivingLicense")} description={"B"} />
    </div>
  );
}

export default Profile;
