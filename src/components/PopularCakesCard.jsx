import Button from "../components/Button";
import React, { useState } from "react";

const SkeletonImage = () => (
  <div className="w-full h-40 bg-gray-300 animate-pulse rounded-t-lg"></div>
);

const PopularCakesCard = ({
  animateType,
  animateOffset,
  animateDuration,
  image,
  name,
  desc,
  id,
  loading,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const imgElement = (
    <img
      src={image || "/assets/images/placeholder-image.jpg"}
      alt={name || "image"}
      className={`w-full object-cover  rounded-t-lg `}
      onLoad={() => setImageLoaded(true)}
      onError={() => setImageLoaded(true)} // supaya skeleton hilang juga saat error gambar
    />
  );

  return (
    <div
      className="card cake-list flex justify-start gap-3 px-4 py-4 flex-col bg-white rounded-lg shadow-md max-w-sm"
      data-aos={animateType}
      data-aos-offset={animateOffset}
      data-aos-duration={animateDuration}
    >
      <div className="overflow-hidden rounded-t-lg relative">
        {loading ? <SkeletonImage /> : null}
        <div className="overflow-hidden">{imgElement}</div>
      </div>

      <div className="content text-primary-100 ">
        <h3 className="text-lg font-semibold font-baloo">{name}</h3>
        <p className="text-primary-100 text-sm leading-relaxed font-poppins">
          {desc ? (desc.length > 100 ? desc.slice(0, 100) + "..." : desc) : ""}
        </p>
      </div>

      <div className="button-wrapper">
        <Button
          className={"bg-primary-100 text-white"}
          text={"Lihat Detail"}
          link={`/Deteksi-Kue/${id}`}
          icon="/assets/icons/detail.svg"
        />
      </div>
    </div>
  );
};

export default PopularCakesCard;
