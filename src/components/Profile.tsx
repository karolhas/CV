import { ProfileCard } from "./common/Profile";

function Profile() {
  return (
    <div className="flex w-full flex-col">
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
