const PopularCakesCard = ({animateType, animateOffset, animateDuration}) => {
  return (
    <div className="card cake-list flex justify-center items-center flex-col bg-white rounded-lg shadow-md max-w-sm" data-aos={animateType} data-aos-offset={animateOffset} data-aos-duration={animateDuration}>
      <div className="image w-full overflow-hidden rounded-t-lg">
        <img
          src="/public/assets/images/klepon.jpg"
          alt="Klepon"
          className="w-full h-56 object-cover"
        />
      </div>
      <div className="content px-4 py-4 text-primary-100 ">
        <h3 className="text-lg font-semibold">Klepon</h3>
        <p className="text-primary-100 mt-2 text-sm leading-relaxed">
          Bola-bola kue beras manis tradisional Indonesia dengan isi gula aren
          dan lapisan kelapa parut.
        </p>
      </div>
    </div>
  );
};

export default PopularCakesCard;
