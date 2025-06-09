import { NavLink, } from "react-router-dom";

import Github from "/assets/icons/github.svg";
import Linkedin from "/assets/icons/linkedin.svg";
const Footer = () => {
    return (
         <footer className="footer px-6 bg-primary-100 text-white md:px-24">
        <div className="wrap-section py-5 flex flex-col gap-8 md:flex-row sm:flex-row md:justify-between ">
          <div className="footer-section flex flex-col gap-6">
            <h1 className="logo font-baloo text-display-3 ">NusaKue</h1>
            <p className="font-poppins text-body-md-regular">
              Temukan dan lestarikan kekayaan <br /> kue tradisional Indonesia
              lewat <br /> teknologi
            </p>
          </div>
          <div className="footer-section flex flex-col gap-6">
            <h1 className="font-poppins text-body-lg-medium">Ikuti Kami</h1>
            <ul className="social-icons flex gap-1">
              <li>
                <a href="https://github.com/NusaKue" className="social-icon" target="_blank">
                  <img src={Github} alt="github icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="font-poppins footer-section flex flex-col gap-6 ">
            <h1 className="text-body-lg-medium">Hubungi Kami</h1>
            <div>
              <p className="text-body-md-regular">Email: hello@nusakue.com</p>
              <p className="text-body-md-regular">
                Nomor Handphone: +62 899-9999-9999
              </p>
            </div>
          </div>
        </div>

        <div className="footer-divider "></div>
        <div className="footer-bottom py-10 text-center">
          <p>© 2025 NusaKue. Semua hak dilindungi.</p>
        </div>
      </footer>
    )
}

export default Footer