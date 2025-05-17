import PopularCakesCard from "../../PopularCakesCard";

const PoularCakes = () => {
  return (
    <section className="px-24 popular-cakes grid grid-rows-[auto_1fr] grid-cols-4 justify-items-center gap-5 py-16">
      <div className="header col-span-4 text-center text-heading-2 text-primary-100 font-baloo pb-6">
        <h1 data-aos="fade-down" data-aos-duration="1000" className="pb-6">
          Kue Tradisional Terpopuler
        </h1>
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
