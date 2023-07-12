function Profile() {
  return (
    <>
      <section id="profile" className="m-4 bg-blue-100 p-6">
        <h2 className="pb-4 text-3xl font-semibold">Profile</h2>
        <div className="flex justify-between">
          <div>
            <p>Name</p>
            <p>Address</p>
            <p>Phone</p>
            <p>Driving License</p>
          </div>
          <div className="text-right text-lg font-semibold">
            <p>Karol Has</p>
            <p>Więcbork, Poland</p>
            <p>+48 733 658 874</p>
            <p>B</p>
          </div>
        </div>
        <h2 className="pb-4 pt-6 text-3xl font-semibold ">Language</h2>
        <div className="flex justify-between">
          <div>
            <p>English</p>
            <p>Polish</p>
          </div>
          <div className="text-right text-lg font-semibold">
            <p>B2</p>
            <p>Native</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
