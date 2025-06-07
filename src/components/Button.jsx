import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const Button = ({
  text = null,
  className,
  icon,
  link,
  onClick,
  whileTap = {scale: 0.9},
  whileHover,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(); // Jalankan callback custom (misal capture gambar)
    } else if (link) {
      navigate(link); // Navigasi jika tidak ada onClick
    }
  };

  return (
    <motion.button
      whileHover={whileHover}
      whileTap={whileTap}
      transition={{
        type: "tween", // atau "spring"
        ease: "easeOut", // untuk tween
        duration: 0.2, // 200ms
        // kalau pakai spring, bisa: stiffness: 600, damping: 25
      }}
      onClick={handleClick}
      type="button"
      className={`
        ${className}
        font-poppins
        flex items-center justify-center
        py-2 px-4 rounded-md
        text-body-md-regular
    
      `}
    >
      {text && <span className="mr-2">{text}</span>}
      {icon && <img src={icon} alt="" />}
    </motion.button>
  );
};

export default Button;
