import React, { useState } from "react";
import MostPopularCake from "./MostPopularCake";

const SkeletonImage = () => (
  <div className="w-full h-40 bg-gray-300 animate-pulse rounded-t-lg"></div>
);

const UMKMCard = ({
  animateType,
  animateOffset,
  animateDuration,
  image_url,
  nama,
  alamat,
  no_telp,
  paling_diminati,
  imgPosition = "top",
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const imgElement = (
    <img
      src={image_url || "/assets/images/placeholder-image.jpg"}
      alt={nama || "image"}
      className={`w-full object-cover rounded-t-lg ${
        imageLoaded ? "block" : "hidden"
      }`}
      onLoad={() => setImageLoaded(true)}
      onError={() => setImageLoaded(true)} // supaya skeleton hilang juga saat error gambar
      style={{ height: imgPosition === "bottom" ? "160px" : "auto" }}
    />
  );

  if (imgPosition === "bottom") {
    return (
      <div className="card umkm-list w-full bg-white rounded-lg shadow-md flex flex-col text-primary-100" data-aos={animateType}
      data-aos-offset={animateOffset}
      data-aos-duration={animateDuration}>
        {/* Skeleton dan gambar */}
        {imageLoaded ? null : <SkeletonImage />}
        <div className="overflow-hidden">{imgElement}</div>

        <div className="px-4 py-4">
          <div className="content">
            {/* konten */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/assets/icons/profile.svg"
                alt="Profil"
                className="w-8 h-8 object-contain"
              />
              <p className="font-poppins text-lg font-semibold">{nama}</p>
            </div>
            <div className="flex items-center gap-3 mb-1">
              <img
                src="/assets/icons/Location.svg"
                alt="Lokasi"
                className="w-5 h-5 object-contain"
              />
              <p className="font-poppins text-md">{alamat}</p>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/icons/whatsapp.svg"
                alt="Whatsapp"
                className="w-5 h-5 object-contain"
              />
              <p className="font-poppins text-md">{no_telp}</p>
            </div>
          </div>

          <div className="">
            <div>
              <p className="font-poppins text-lg font-semibold mb-2">
                Paling diminati:
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {paling_diminati.map((item, index) => (
                <MostPopularCake key={index} text={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (imgPosition === "top") {
    return (
      <div className="card umkm-list flex flex-col bg-white rounded-lg shadow-md w-full sm:max-w-[calc(50%-0.75rem)] md:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(33.333%-1rem)] xl:max-w-[calc(25%-1.25rem)]">
        {/* Skeleton dan gambar */}
        {imageLoaded ? null : <SkeletonImage />}
        <div className="overflow-hidden">{imgElement}</div>

        <div className="content px-4 py-4 text-primary-100 ">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/assets/icons/profile.svg"
              alt="Profil"
              className="w-12 object-contain"
            />
            <p className="font-poppins text-body-lg-medium">{nama}</p>
          </div>
          <div className="flex items-center gap-3 mb-1">
            <img
              src="/assets/icons/Location.svg"
              alt="Lokasi"
              className="w-5 object-contain"
            />
            <p className="font-poppins text-body-md-regular">{alamat}</p>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/assets/icons/whatsapp.svg"
              alt="Whatsapp"
              className="w-5 object-contain"
            />
            <p className="font-poppins text-body-md-regular">{no_telp}</p>
          </div>
          <div>
            <p className="font-poppins text-body-lg-medium mb-2">
              Paling diminati:
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {paling_diminati.map((item, index) => (
              <MostPopularCake key={index} text={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default UMKMCard;
