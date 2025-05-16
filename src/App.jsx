import { useState } from "react";
import viteLogo from "/vite.svg";
import { Router } from "./routers/router.jsx";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  );
}

export default App;
