import TeamProfile from "../../TeamProfile";
import { motion, AnimatePresence } from "framer-motion";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Ady Subagya Junior",
      role: "Machine Learning",
      icon: "/assets/images/teamprofile/Ady Subagya Junior.jpeg",
      linkedin: "https://www.linkedin.com/in/adysbgy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Bagus Dzakiy Rahman Saputra",
      role: "Machine Learning",
      icon: "/assets/images/teamprofile/Bagus Dzakiy Rahman Saputra.jpg",
      linkedin:"https://www.linkedin.com/in/bagusdzakiy/"
    },
    {
      name: "Fiyanda Ma'muri",
      role: "Machine Learning",
      icon: "/assets/images/teamprofile/Fiyanda Ma'muri.png",
      linkedin:"https://www.linkedin.com/in/fiyandamamuri/"
    },
    {
      name: "Revaldo Relinsyah",
      role: "Back-End Developer",
      icon: "/assets/images/teamprofile/Revaldo_Relinsyah.jpg",
      linkedin:"https://www.linkedin.com/in/revaldo-relinsyah-7267012a1/"
    },
    {
      name: "Muhammad Irfan",
      role: "Front-End Developer",
      icon: "/assets/images/teamprofile/Muhammad Irfan.png",
      linkedin:"https://www.linkedin.com/in/muhammad-irfan-0ba9b326b/"
    },
    {
      name: "Sylvia Steffi",
      role: "Front-End Developer",
      icon: "/assets/images/teamprofile/Sylvia Steffi.jpg",
      linkedin:"https://www.linkedin.com/in/sylvia-steffi-518553320/"
    },
  ];

  return (
    <section className="our-team px-6 sm:px-8 md:px-12 lg:px-24 py-8 sm:py-10 md:py-14 lg:py-16">
      <div className="team-content text-primary-100 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay:  0.9,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="about-title font-baloo text-heading-5 sm:text-heading-4 md:text-heading-3 lg:text-heading-1 text-center pb-4 sm:pb-5 md:pb-6 lg:pb-7"
          
        >
          Tim Kami
        </motion.h1>
      </div>

      <div className="team-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-24 mx-auto w-fit">
        {teamMembers.map((member) => (
          <TeamProfile
            name={member.name}
            role={member.role}
            icon={member.icon}
            linkedin={member.linkedin}
            animateType="zoom-in"
            animateOffset="100"
            animateDuration="1000"
          />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
