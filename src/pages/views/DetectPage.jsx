import { useState} from "react";
import CameraSection from "../../components/Pages/Detect/CameraSection";
import ResultPredict from "../../components/Pages/Detect/ResultPredict";

function DetectPage() {
    const [result, setResult] = useState(null);
    console.log("detect",result);
    
  return (
    <>
      <CameraSection setResult={setResult}/>
      <ResultPredict result={result}/>
    </>
  );
}

export default DetectPage;
