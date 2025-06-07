import { Router } from "./routers/router.jsx";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import ClickSpark from "./components/Animation/ClickSpark.jsx";
import SplashScreen from "./components/Animation/SplashScreen.jsx";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <ClickSpark
        sparkColor="#ae977e"
        sparkSize={15}
        sparkRadius={20}
        sparkCount={7}
        duration={400}
      >
        <SplashScreen />
        <RouterProvider router={Router}></RouterProvider>
      </ClickSpark>
    </>
  );
}

export default App;
