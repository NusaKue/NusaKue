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

const dataTeamProfile = {
  async getTeamProfile() {
    return [...teamMembers];
  },
};

export default dataTeamProfile;
