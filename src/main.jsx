import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ClickSpark from "./components/ReactBits/ClickSpark.jsx";
import "../public/css/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <ClickSpark
    sparkColor="#ae977e"
    sparkSize={15}
    sparkRadius={20}
    sparkCount={7}
    duration={400}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </ClickSpark>
);
