import { useState, useRef, useEffect } from "react";
import CameraSection from "../../components/Pages/Detect/CameraSection";
import ResultPredict from "../../components/Pages/Detect/ResultPredict";
import Recomendation from "../../components/Pages/Detect/Recomendation";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function DetectPage() {
  const [imageData, setImage] = useState(null);
  const [idData, setIdData] = useState(null);

  const resultRef = useRef(null);

  useEffect(() => {
    if (idData && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [idData]);

  return (
    <>
      <CameraSection setImage={setImage} />
      <div ref={resultRef}>
        <ResultPredict imageData={imageData} setIdData={setIdData} />
      </div>
      {idData && <Recomendation id={idData} />}
    </>
  );
}

export default DetectPage;
