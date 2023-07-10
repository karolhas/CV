import Image from "../assets/photo.jpg";

function Photo() {
  return (
    <>
      <div className="flex justify-center m-10">
        <img
          src={Image}
          alt="photography"
          className="h-60 w-60 rounded-full object-cover"
        />
      </div>
    </>
  );
}

export default Photo;
