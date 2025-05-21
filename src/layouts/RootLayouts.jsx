import { NavLink, Outlet } from "react-router-dom";
import "/public/css/Layout.css";
import Github from "/public/assets/icons/github.svg";
import Linkedin from "/public/assets/icons/linkedin.svg";
function RootLayout() {
  return (
    <>
      <nav
        style={{ backgroundColor: "#ffffff" }}
        className="w-screen px-6 sm:px-24 py-3 fixed top-0 left-0 right-0 z-50 grid grid-cols-2  text-primary-100"
      >
        <div className="text-heading-4 sm:text-heading-2 logo font-baloo  flex items-center gap-2">
          <img
            src="/public/assets/icons/logo.svg"
            alt=""
            className="h-8 w-auto sm:h-10"
          />
          <h1 className="text-center pt-2">NusaKue</h1>
        </div>

        <ul className="nav-links hidden md:flex font-poppins text-body-md-regular items-center space-x-8 justify-end">
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
                    isActive ? "navlink active" : "navlink"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
      </nav>

      <main className="bg-primary-20 pt-[64px]">
        <Outlet />
      </main>

      <footer className="footer px-24 bg-primary-100">
        <div className="wrap-section py-5">
          <div className="footer-section">
            <h1 className="logo font-baloo text-display-3">NusaKue</h1>
            <p className="font-poppins text-body-md-regular">
              Temukan dan lestarikan kekayaan <br /> kue tradisional Indonesia
              lewat <br /> teknologi
            </p>
          </div>
          <div className="footer-section">
            <h1 className="font-poppins text-body-lg-medium">Ikuti Kami</h1>
            <ul className="social-icons">
              <li>
                <NavLink className="social-icon">
                  <img src={Github} alt="github icon" />
                </NavLink>
              </li>
              <li>
                <NavLink className="social-icon">
                  <img src={Linkedin} alt="linkedin icon" />
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="font-poppins footer-section">
            <h1 className="text-body-lg-medium">Hubungi Kami</h1>
            <p className="text-body-md-regular">Email: hello@nusakue.com</p>
            <p className="text-body-md-regular">
              Nomor Handphone: +62 899-9999-9999
            </p>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom py-10">
          <p>© 2025 NusaKue. Semua hak dilindungi.</p>
        </div>
      </footer>
    </>
  );
}

export default RootLayout;
