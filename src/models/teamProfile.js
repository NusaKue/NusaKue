const teamMembers = [
  {
    name: "Ady Subagya Junior",
    role: "Machine Learning",
    icon: "/assets/images/teamprofile/Ady Subagya Junior.jpeg",
  },
  {
    name: "Bagus Dzakiy Rahman Saputra",
    role: "Machine Learning",
    icon: "/assets/images/kucheng.png",
  },
  {
    name: "Fiyanda Ma'muri",
    role: "Machine Learning",
    icon: "/assets/images/kucheng.png",
  },
  {
    name: "Revaldo Relinsyah",
    role: "Back-End Developer",
    icon: "/assets/images/kucheng.png",
  },
  {
    name: "Muhammad Irfan",
    role: "Front-End Developer",
    icon: "/assets/images/kucheng.png",
  },
  {
    name: "Sylvia Steffi",
    role: "Front-End Developer",
    icon: "/assets/images/teamprofile/Sylvia Steffi.jpg",
  },
];

const dataTeamProfile = {
  async getTeamProfile() {
    return [...teamMembers];
  },
};

export default dataTeamProfile;
