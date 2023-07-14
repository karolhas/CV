import Image from "../assets/photo.jpg";

function Photo() {
  return (
    <div className="flex justify-center">
      <img
        src={Image}
        alt="photography"
        className="h-72 w-72 rounded-full object-cover"
      />
    </div>
  );
}

export default Photo;
