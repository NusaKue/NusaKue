import PopularCakesCard from "../../PopularCakesCard";

const PoularCakes = () => {
  return (
    <section className="px-14 popular-cakes grid grid-rows-[auto_1fr] grid-cols-4 justify-items-center gap-5 pb-16">
      <div className="header col-span-4 text-center text-heading-2 text-primary-100 py-14 font-baloo">
        <h2 data-aos="fade-down" data-aos-duration="500">Kue Tradisional Terpopuler</h2>
      </div>

      <PopularCakesCard
        animateType="fade-up"
        animateOffset="100"
        animateDuration="1000"
      />
      <PopularCakesCard
        animateType="fade-up"
        animateOffset="100"
        animateDuration="1000"
      />
      <PopularCakesCard
        animateType="fade-up"
        animateOffset="100"
        animateDuration="1000"
      />
      <PopularCakesCard
        animateType="fade-up"
        animateOffset="100"
        animateDuration="1000"
      />
    </section>
  );
};

export default PoularCakes;
