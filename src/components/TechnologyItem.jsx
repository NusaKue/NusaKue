const TechnologyItem = ({ name, icon, desc, className }) => {
  return (
    <div className={`${className}`}>
      <div className="bg-primary-20 rounded-xl p-4 w-full justify-items-center">
        <img src={icon} className="mb-4" alt="" />
        <p className="font-poppins text-body-xl-medium mb-1">{name}</p>
        <p className="font-poppins text-body-md-regular">{desc}</p>
      </div>
    </div>
  );
};

export default TechnologyItem;
