import PopularCakesCard from "../../PopularCakesCard";

const PoularCakes = () => {
  return (
    <section className="popular-cakes py-10 grid md:grid-rows-[auto_1fr] justify-items-center gap-5 md:px-36 md:gap-6 md:grid-cols-4 px-6">
      
      <div className="header font-baloo text-primary-100 text-center text-heading-2 col-span-1 md:col-span-4">
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
