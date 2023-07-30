import { ProfileCard } from "./common/Profile";
// import { useTranslation } from "react-i18next";

function Profile() {
  // const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col md:mx-auto md:w-3/4 lg:w-full">
      <div>
        <h2 className="mb-3 text-3xl font-semibold">Profile</h2>
      </div>
      <ProfileCard caption={"Name"} description={"Karol Has"} />
      <ProfileCard caption={"Address"} description={"Więcbork, Poland"} />
      <ProfileCard caption={"Phone"} description={"+48 733 658 874"} />
      <ProfileCard caption={"Driving license"} description={"B"} />
    </div>
  );
}

export default Profile;
