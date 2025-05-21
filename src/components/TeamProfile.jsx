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
      className="flex flex-row lg:flex-col items-center justify-between gap-4 w-full h-auto py-4 rounded-xl"
      data-aos={animateType}
      data-aos-offset={animateOffset}
      data-aos-duration={animateDuration}
    >
      <img
        src={icon}
        className="w-16 h-16 sm:w-40 sm:h-40 lg:w-60 lg:h-60 mb-4"
        alt={name}
      />
      <div className="flex-1 text-left lg:text-center ">
        <p className="font-poppins text-body-lg-medium lg:text-body-xl-medium mb-1 text-primary-100">
          {name}
        </p>
        <p className="font-poppins text-body-sm-regular lg:text-body-md-regular text-primary-100">
          {role}
        </p>
      </div>
    </div>
  );
};

export default TeamProfile;
