const TechnologyItem = ({
  name,
  icon,
  desc,
  className,
  animateType,
  animateOffset,
  animateDuration,
}) => {
  return (
    <div
      className={`${className}`}
      data-aos={animateType}
      data-aos-offset={animateOffset}
      data-aos-duration={animateDuration}
    >
      <div className="bg-primary-20 rounded-xl p-4 min-h-full flex flex-col items-center text-center shadow-lg transition-all ease-in-out hover:scale-105">
        <img src={icon} className="mb-4 w-10 sm:w-12 md:w-14 lg:w-16" alt="" />
        <p className="font-poppins text-body-lg-medium lg:text-body-xl-medium mb-1 text-primary-100">
          {name}
        </p>
        <p className="font-poppins text-body-md-regular lg:text-body-lg-regular text-primary-100">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default TechnologyItem;
