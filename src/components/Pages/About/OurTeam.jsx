import TeamProfile from "../../TeamProfile";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Nama 1",
      role: "Machine Learning",
      icon: "/assets/images/kucheng.png",
    },
    {
      name: "Nama 2",
      role: "Machine Learning",
      icon: "/assets/images/kucheng.png",
    },
    {
      name: "Nama 3",
      role: "Machine Learning",
      icon: "/assets/images/kucheng.png",
    },
    {
      name: "Nama 4",
      role: "Back-End",
      icon: "/assets/images/kucheng.png",
    },
    {
      name: "Nama 5",
      role: "Front-End",
      icon: "/assets/images/kucheng.png",
    },
    {
      name: "Nama 6",
      role: "Front-End",
      icon: "/assets/images/kucheng.png",
    },
  ];

  return (
    <section className="our-team py-16">
      <div className="team-content text-primary-100">
        <h2 className="team-title font-baloo text-heading-2 text-center mb-10">
          Tim Kami
        </h2>
        <div className="team-content grid grid-cols-12">
          {teamMembers.map((member) => (
            <TeamProfile
              className=" col-span-4 justify-items-center pb-10"
              name={member.name}
              role={member.role}
              icon={member.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
