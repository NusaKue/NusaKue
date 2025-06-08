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
      className="w-full md:w-60"
      data-aos={animateType}
      data-aos-offset={animateOffset}
      data-aos-duration={animateDuration}
    >
      {/* Mobile Layout: horizontal, non-flip */}
      <div className="flex flex-row md:hidden items-center gap-4 text-center w-full">
        <div className="w-24 sm:w-44 aspect-square rounded-full overflow-hidden flex-shrink-0 shadow-lg">
          <img
            src={icon}
            className="w-full h-full object-cover object-center"
            alt={name}
          />
        </div>
        <div className="text-left">
          <p className="font-poppins text-body-lg-medium text-primary-100 mb-1">
            {name}
          </p>
          <p className="font-poppins text-body-md-regular text-primary-100">
            {role}
          </p>
        </div>
      </div>

      {/* Desktop Layout: flip effect */}
      <div className="hidden md:block w-full aspect-square">
        <div className="flip-card w-full h-full">
          <div className="flip-inner w-full h-full">
            {/* FRONT */}
            <div className="flip-front w-full h-full rounded-full overflow-hidden shadow-lg">
              <img
                src={icon}
                className="w-full h-full object-cover object-center"
                alt={name}
              />
            </div>

            {/* BACK */}
            <div className="flip-back w-full h-full rounded-full flex flex-col items-center justify-center bg-primary-100 text-white p-2 text-center">
              <p className="font-poppins text-body-xl-medium mb-1">{name}</p>
              <p className="font-poppins text-body-lg-regular">{role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamProfile;
