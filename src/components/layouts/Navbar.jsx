import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { useLocation, NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const location = useLocation();

  const hamburgerHandler = () => setIsOpen((prev) => !prev);

  const menuVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.3 } },
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav className="px-6 md:px-24 py-4 fixed top-0 left-0 right-0 z-50 grid grid-cols-2  text-primary-100 bg-white ">
      <div className="text-heading-4 sm:text-heading-2 logo font-baloo  flex items-center gap-2">
        <img
          src="/public/assets/icons/logo.svg"
          alt=""
          className="h-8 w-auto sm:h-10"
        />
        <h1 className="text-center pt-2">NusaKue</h1>
      </div>

      <button
        ref={hamburgerRef}
        onClick={hamburgerHandler}
        className=" lg:hidden flex items-center justify-end focus:outline-none"
        aria-label="Hamburger menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <ul className="nav-links text-body-sm-regular lg:flex lg:text-body-sm-regular xl:text-body-md-regular hidden font-poppins items-center space-x-8 justify-end ">
        {[
          { to: "/", label: "Beranda" },
          { to: "/Deteksi-Kue", label: "Deteksi Kue" },
          { to: "/Cari-UMKM", label: "Cari UMKM" },
          { to: "/Tentang-kami", label: "Tentang Kami" },
        ].map(({ to, label }) => (
          <li key={to} className="nav-item flex justify-center">
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "scale-110 text-success-80 transition-transform ease-in"
                  : "hover:text-success-80 transition-all ease-in"
              }
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            ref={menuRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="nav-links absolute top-full left-0  right-0 bg-white shadow-lg flex flex-col  font-poppins text-body-md-regular space-y-4 p-6 lg:hidden z-40"
          >
            {[
              { to: "/", label: "Beranda" },
              { to: "/Deteksi-Kue", label: "Deteksi Kue" },
              { to: "/Cari-UMKM", label: "Cari UMKM" },
              { to: "/Tentang-kami", label: "Tentang Kami" },
            ].map(({ to, label }) => (
              <li key={to} className="nav-item flex justify-center">
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? "scale-110 text-success-80 transition-transform ease-in"
                      : "hover:text-success-80 transition-all ease-in"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
