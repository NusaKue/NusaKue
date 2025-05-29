import MostPopularCake from "./MostPopularCake";

const UMKMCard = ({ image, alt, name, address, phone, popularCakes }) => {
  return (
    <div className="card umkm-list flex flex-col bg-white rounded-lg shadow-md w-full sm:max-w-[calc(50%-0.75rem)] md:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(33.333%-1rem)] xl:max-w-[calc(25%-1.25rem)]">
      <div className="overflow-hidden rounded-t-lg">
        <img src={image} alt={alt} className="w-full bg-cover object-cover" />
      </div>
      <div className="content px-4 py-4 text-primary-100 ">
        <div className="flex items-center gap-4 mb-4">
          <img
            src="assets/icons/profile.svg"
            alt="Profil"
            className="w-12 object-contain"
          />
          <p className="font-poppins text-body-lg-medium">{name}</p>
        </div>
        <div className="flex items-center gap-3 mb-1">
          <img
            src="assets/icons/Location.svg"
            alt="Lokasi"
            className="w-5 object-contain"
          />
          <p className="font-poppins text-body-md-regular">{address}</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <img
            src="assets/icons/whatsapp.svg"
            alt="Whatsapp"
            className="w-5 object-contain"
          />
          <p className="font-poppins text-body-md-regular">{phone}</p>
        </div>
        <div>
          <p className="font-poppins text-body-lg-medium mb-2">
            Paling diminati:
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {popularCakes.map((cake, index) => (
            <MostPopularCake key={index} text={cake} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UMKMCard;
