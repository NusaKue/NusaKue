import { useNavigate } from "react-router-dom";

const Button = ({ text, className, icon, link, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(); // Jalankan callback custom (misal capture gambar)
    } else if (link) {
      navigate(link); // Navigasi jika tidak ada onClick
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} font-poppins flex items-center justify-center py-2 px-4 rounded-md text-body-md-regular shadow-lg transition duration-150 ease-in-out active:scale-95 hover:shadow-md`}
      type="button"
    >
      <p>{text}</p>
      {icon && <img src={icon} className="ml-2" alt="" />}
    </button>
  );
};

export default Button;