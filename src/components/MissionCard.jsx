const MissionCard = ({ icon, title, desc }) => {
  return (
    <div className="mission-card text-white grid grid-cols-[auto_1fr] gap-2 sm:gap-3 md:gap-4 lg:gap-5">
      <div className="mission-icon flex items-start">
        <img src={icon} className="w-5 lg:w-6 object-contain" alt="" />
      </div>

      <div className="mission-content ">
        <h3 className="mission-title font-baloo text-heading-5 lg:text-heading-3 pb-2 sm:pb-3 md:pb-4 lg:pb-5">
          {title}
        </h3>
        <p className="font-poppins text-body-md-regular lg:text-body-lg-regular">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default MissionCard;
