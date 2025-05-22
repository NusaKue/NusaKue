import { Outlet } from "react-router-dom";

import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="bg-primary-20 pt-16 md:pt-0">
        <Outlet />
      </main>
    <Footer />
    </>
  );
}

export default RootLayout;
