const TeamProfile = ({
  name,
  icon,
  role,
  animateType,
  animateOffset,
  animateDuration,
}) => {
  return (
    <div
      className="flex flex-row lg:flex-col items-center gap-4 w-full lg:w-fit text-center"
      data-aos={animateType}
      data-aos-offset={animateOffset}
      data-aos-duration={animateDuration}
    >
      <img
        src={icon}
        className="w-24 h-24 sm:w-44 sm:h-44 lg:w-60 lg:h-60"
        alt={name}
      />
      <div className="w-full lg:w-fit">
        <p className="font-poppins text-body-lg-medium lg:text-body-xl-medium mb-1 text-primary-100">
          {name}
        </p>
        <p className="font-poppins text-body-md-regular lg:text-body-lg-regular text-primary-100">
          {role}
        </p>
      </div>
    </div>
  );
};

export default TeamProfile;
