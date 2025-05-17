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
    <section className="technology bg-white py-24 w-screen px-24 grid grid-rows-2">
      <div className="technology-content text-primary-100">
        <h2 className="technology-title font-baloo text-center text-heading-1 mb-10">
          Teknologi yang Kami Gunakan
        </h2>
      </div>
      <div className="techonolgy-content grid grid-cols-12 gap-5">
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
