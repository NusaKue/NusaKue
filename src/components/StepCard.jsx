const StepCard = ({ icon, title, desc, animateType, animateOffset, animateDuration}) => {
  return (
    <div className="step-1 grid gap-5 px-6" data-aos={animateType} data-aos-offset={animateOffset} data-aos-duration={animateDuration}>
      <div className="step-img flex justify-center items-center ">
        <img
          src={icon}
          className=""
          alt=""
        />
      </div>
      
      <div className="step-content text-white flex flex-col items-center text-center gap-5 ">
        <h3 className="text-heading-4 font-baloo">{title}</h3>
        <p className="body-xl-regular font-poppins">{desc}</p>
      </div>
    </div>
  );
};

export default StepCard
