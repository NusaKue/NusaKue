import TeamProfile from "../../TeamProfile";

const OurTeam = ({members}) => {
 
  return (
    <section className="our-team py-16 px-24 grid grid-cols-12 grid-rows-[auto_1fr]">
      <div className="team-content text-primary-100 col-span-12">
        <h2 className="team-title font-baloo text-heading-1 text-center mb-10">
          Tim Kami
        </h2>
      </div>

      <div className="team-content col-span-12 grid grid-cols-3 gap-8 col-start-2">
        {Object.values(members).map((member) => (
          <TeamProfile
            className="flex flex-col items-center  w-80 h-auto py-4 rounded-xl"
            name={member.name}
            role={member.role}
            icon={member.icon}
            animateType="flip-right"
            animateOffset="100"
            animateDuration="1000"
          />
        ))}
      </div>
      
    </section>
  );
};

export default OurTeam;
