function Profile() {
  return (
    <>
      <div className="flex w-full flex-col">
        <div>
          <h2 className="text-3xl font-semibold">Profile</h2>
        </div>
        <div className="grid grid-cols-2 items-center justify-between">
          <div className="cols-span-1">
            <p>Name</p>
            <p>Address</p>
            <p>Phone</p>
            <p>Driving License</p>
          </div>
          <div className="cols-span-1 text-right text-lg font-semibold">
            <p>Karol Has</p>
            <p>Więcbork, Poland</p>
            <p>+48 733 658 874</p>
            <p>B</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
