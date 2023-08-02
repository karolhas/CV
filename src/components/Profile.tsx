import { ProfileCard } from "./common/Profile";
import { useTranslation } from "react-i18next";

import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Profile() {
  const { t } = useTranslation("common");

  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  });

  return (
    <div className="flex flex-col md:mx-auto md:w-3/4 lg:w-full">
      <div>
        <h2 className="mb-3 text-3xl font-semibold">
          {Loading ? <Skeleton width={100} /> : t("title.profile")}
        </h2>
      </div>
      {Loading ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        <>
          <ProfileCard caption={t("caption.name")} description={"Karol Has"} />
          <ProfileCard
            caption={t("caption.address")}
            description={"Więcbork, Poland"}
          />
          <ProfileCard
            caption={t("caption.phone")}
            description={"+48 733 658 874"}
          />
          <ProfileCard
            caption={t("caption.drivingLicense")}
            description={"B"}
          />
        </>
      )}
    </div>
  );
}

export default Profile;
