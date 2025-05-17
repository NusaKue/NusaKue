const TeamProfile = ({ name, icon, role, className, animateType, animateOffset, animateDuration }) => {
  return (
    <div className={`${className} `} data-aos={animateType} data-aos-offset={animateOffset} data-aos-duration={animateDuration}>
      <img src={icon} className="mb-4" alt="" />
      <p className="font-poppins text-body-xl-medium mb-1">{name}</p>
      <p className="font-poppins text-body-md-regular">{role}</p>
    </div>
  );
};

export default TeamProfile;
