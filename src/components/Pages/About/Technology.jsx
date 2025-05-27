import TechnologyItem from "../../TechnologyItem";

const Technology = () => {
  const technologyItems = [
    {
      icon: "/assets/logo/love.svg",
      name: "Test",
      desc: "...",
    },
    {
      icon: "/assets/logo/love.svg",
      name: "Test",
      desc: "...",
    },
    {
      icon: "/assets/logo/love.svg",
      name: "Test",
      desc: "...",
    },
    {
      icon: "/assets/logo/love.svg",
      name: "Test",
      desc: "...",
    },
  ];

  return (
    <section className="technology bg-white px-6 sm:px-8 md:px-12 lg:px-24 py-8 sm:py-10 md:py-14 lg:py-24 ">
      <div className="technology-content text-primary-100">
        <h2 className="technology-title font-baloo text-center text-heading-5 sm:text-heading-4 md:text-heading-3 lg:text-heading-2 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          Teknologi yang Kami Gunakan
        </h2>
      </div>
      <div className="techonolgy-content grid grid-cols-6 lg:grid-cols-12 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
        {technologyItems.map((item) => (
          <TechnologyItem
            className="col-span-3"
            icon={item.icon}
            name={item.name}
            desc={item.desc}
            animateType="zoom-in"
            animateOffset="100"
            animateDuration="1000"
          />
        ))}
      </div>
    </section>
  );
};

export default Technology;
