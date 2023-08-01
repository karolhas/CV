import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "../assets/photo.jpg";

function Photo() {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="flex justify-center">
      {isLoading ? <Skeleton width={288} height={288} circle={true} /> : null}
      <img
        src={Image}
        alt="fotografia"
        className={`h-72 w-72 rounded-full object-cover ${
          isLoading ? "hidden" : ""
        }`}
        onLoad={handleImageLoad}
      />
    </div>
  );
}

export default Photo;
