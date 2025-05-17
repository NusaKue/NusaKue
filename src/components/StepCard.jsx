const StepCard = ({ icon, title, desc, animateType, animateOffset, animateDuration}) => {
  return (
    <div className="step-1 grid gap-5" data-aos={animateType} data-aos-offset={animateOffset} data-aos-duration={animateDuration}>
      <div className="step-img flex justify-center">
        <img
          src={icon}
          className=""
          alt=""
        />
      </div>
      <div className="step-content text-center text-white flex flex-col gap-3">
        <h3 className="text-heading-4 font-baloo">{title}</h3>
        <p className="body-xl-regular font-poppins">{desc}</p>
      </div>
    </div>
  );
};

export default StepCard
