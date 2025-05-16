import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayouts.jsx";

import HomePage from "../pages/views/HomePage.jsx";
import AboutPage from "../pages/views/AboutPage.jsx";
import DetectPage from "../pages/views/DetectPage.jsx";
import UmkmPage from "../pages/views/UmkmPage.jsx";
import ScrollToTop from "../components/ScrollOnTop";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <RootLayout />
      </>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/Deteksi-Kue",
        element: <DetectPage />,
      },
      {
        path: "/Cari-UMKM",
        element: <UmkmPage />,
      },
      {
        path: "/Tentang-kami",
        element: <AboutPage />,
      },
    ],
  },
]);
