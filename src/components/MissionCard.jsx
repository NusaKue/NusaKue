const MissionCard = ({ icon, title, desc }) => {
  return (
    <div className="mission-card text-white grid grid-cols-[auto_1fr] gap-3 pt-2">
      <div className="mission-icon flex items-start">
        <img src={icon} className="w-5 lg:w-6 object-contain" alt="" />
      </div>

      <div className="mission-content ">
        <h3 className="mission-title font-baloo text-heading-3 pb-5">
          {title}
        </h3>
        <p className="font-poppins text-body-md-regular ">{desc}</p>
      </div>
    </div>
  );
};

export default MissionCard;
