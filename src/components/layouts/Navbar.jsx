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
    <nav className="px-6 md:px-24 py-4 fixed top-0 left-0 right-0 z-40 grid grid-cols-2  text-primary-100 bg-white ">
      <div className="text-heading-4 sm:text-heading-2 logo font-baloo  flex items-center gap-2">
        <img
          src="/assets/icons/logo.svg"
          alt=""
          className="h-8 w-auto sm:h-10"
        />
        <h1 className="text-center pt-2"><a href="/">NusaKue</a></h1>
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
      <AnimatePresence>
        <ul className="nav-links hidden lg:flex items-center space-x-8 text-body-sm-regular xl:text-body-md-regular font-poppins justify-end">
          {[
            { to: "/", label: "Beranda" },
            { to: "/Deteksi-Kue", label: "Deteksi Kue" },
            { to: "/Cari-UMKM", label: "Cari UMKM" },
            { to: "/Tentang-kami", label: "Tentang Kami" },
          ].map(({ to, label }) => (
            <li key={to} className="group">
              <NavLink
                to={to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `relative inline-block
           transition-colors duration-200
           ${
             isActive
               ? "text-success-80" // warna teks saat active
               : "text-primary-100 hover:text-success-80"
           }
           before:content-['']                 /* buat pseudo-element */
           before:absolute before:left-0
           before:bottom-[-2px]                /* 2px di bawah teks */
           before:h-[2px]                      /* tinggi garis */
           before:bg-success-80                /* warna garis */
           before:transition-[width] before:duration-300
           ${
             isActive
               ? "before:w-full" /* kalau active full lebar */
               : "before:w-0 group-hover:before:w-full"
           }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            ref={menuRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="nav-links absolute top-full right-0 bg-white shadow-lg flex flex-col items-end font-poppins text-body-md-regular space-y-4 p-6 lg:hidden z-40"
          >
            {" "}
            {[
              { to: "/", label: "Beranda" },
              { to: "/Deteksi-Kue", label: "Deteksi Kue" },
              { to: "/Cari-UMKM", label: "Cari UMKM" },
              { to: "/Tentang-kami", label: "Tentang Kami" },
            ].map(({ to, label }) => (
              <li key={to} className="group">
                <NavLink
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `relative block w-full text-right
                     transition-colors duration-200
           ${
             isActive
               ? "text-success-80" // warna teks saat active
               : "text-primary-100 hover:text-success-80"
           }
            before:content-[''] before:absolute
            before:right-0 before:bottom-[-2px]
            before:h-[2px] before:bg-success-80
            before:transition-[width] before:duration-300+         
         ${
           isActive
             ? "before:w-full before:left-0"
             : "before:w-0 group-hover:before:w-full before:left-auto"
         }`
                  }
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
