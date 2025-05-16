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
    <section className="technology bg-white py-24 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-14">
      <div className="technology-content text-primary-100">
        <h2 className="technology-title font-baloo text-center text-heading-2 mb-10">
          Teknologi yang Kami Gunakan
        </h2>
        <div className="techonolgy-content grid grid-cols-12 gap-5">
          {technologyItems.map((item) => (
            <TechnologyItem
              className=" col-span-3"
              icon={item.icon}
              name={item.name}
              desc={item.desc}
              animateType="zoom-in"
              animateOffset="100"
              animateDuration="1000"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
