const TeamProfile = ({ name, icon, role, className }) => {
  return (
    <div className={`${className}`}>
      <img src={icon} className="mb-4" alt="" />
      <p className="font-poppins text-body-xl-medium mb-1">{name}</p>
      <p className="font-poppins text-body-md-regular">{role}</p>
    </div>
  );
};

export default TeamProfile;
