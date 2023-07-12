import Image from "../assets/photo.jpg";

function Photo() {
  return (
    <>
      <picture className="m-10 flex justify-center">
        <img
          src={Image}
          alt="photography"
          className="h-72 w-72 rounded-full object-cover"
        />
      </picture>
    </>
  );
}

export default Photo;
