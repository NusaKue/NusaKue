import { useEffect, useState } from "react";
import AboutNusa from "../../components/Pages/About/AboutNusa";
import OurMission from "../../components/Pages/About/OurMission";
import OurTeam from "../../components/Pages/About/OurTeam";
import Technology from "../../components/Pages/About/Technology";
import { AboutPresenter } from "../presenters/AboutPresenter";
function AboutPage() {
  const [profile, setProfile] = useState('');
  const presenter = new AboutPresenter({
    setTeamProfile: setProfile,
  });

  useEffect(() => {
    presenter.loadTeamProfile();
  }, []);

  return (
    <>
      <AboutNusa />
      <OurMission />
      <OurTeam  members={profile}/>
      <Technology />
    </>
  );
}

export default AboutPage;
