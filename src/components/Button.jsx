import {NavLink} from "react-router-dom";
const Button = ({ text, className, icon, link}) => {
  return (
    <NavLink to={link} className={`${className} font-poppins flex py-2 px-4 rounded-md text-body-md-regular`}>
      {text}
      <img src={icon} className="ml-2" alt="" />
    </NavLink>
  );
};

export default Button;
