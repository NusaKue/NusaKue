import PopularCakesCard from "../../PopularCakesCard";

const PoularCakes = () => {
  return (
    <section className="popular-cakes grid-cols-1 py-10 grid justify-items-center gap-5 md:px-36 md:gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 px-6">
      <div className="header font-baloo text-primary-100 text-center text-heading-2 col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-4 lg:">
        <h1 data-aos="fade-down" data-aos-duration="1000" className="pb-6">
          Kue Tradisional Terpopuler
        </h1>
      </div>

        <PopularCakesCard
          animateType="fade-up"
          animateOffset="100"
          animateDuration="1000"
          image="/public/assets/images/klepon.jpg"
        />
        <PopularCakesCard
          animateType="fade-up"
          animateOffset="100"
          animateDuration="1000"
          image="/public/assets/images/cover.jpg" 
        />
        <PopularCakesCard
          animateType="fade-up"
          animateOffset="100"
          animateDuration="1000"
          image="/public/assets/images/kucheng.png"
        />
        <PopularCakesCard
          animateType="fade-up"
          animateOffset="100"
          animateDuration="1000"
          image="/public/assets/images/hero-img.jpg"
        />

    </section>
  );
};

export default PoularCakes;
