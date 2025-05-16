import { NavLink } from "react-router-dom";
const Button = ({ text, className, icon, link }) => {
  return (
    <NavLink
      to={link}
      className={`${className} font-poppins flex items-center justify-center py-2 px-4 rounded-md text-body-md-regular shadow-lg transition duration-150 ease-in-out active:scale-95 hover:shadow-md`}
    >
      <p className="">{text}</p>
      <img src={icon} className="ml-2" alt="" />
    </NavLink>
  );
};

export default Button;
