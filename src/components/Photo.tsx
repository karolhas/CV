import Image from "../assets/photo.jpg";

import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Photo() {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  });

  return (
    <div className="flex justify-center">
      {Loading ? (
        <Skeleton width={288} height={288} circle={true} />
      ) : (
        <img
          src={Image}
          alt="fotografia"
          className={"h-72 w-72 rounded-full object-cover"}
        />
      )}
    </div>
  );
}

export default Photo;
