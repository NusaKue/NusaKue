import { useState, useRef, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import DetectPresenter from "../../../pages/presenters/DetectPreseter.js";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Button from "../../Button";

const CameraSection = ({ setResult }) => {
  const [loading, setLoading] = useState(true);
  const [loadingPredict, setLoadingPredict] = useState(false);
  const [imgUrl, setImageUrl] = useState("");
  const [isCapture, setIsCapture] = useState(false);
  const [error, setError] = useState(null);
  const [cameraActive, setCameraActive] = useState(true);
  const [cameraAllowed, setCameraAllowed] = useState(true);

  const webcamRef = useRef(null);
  const inputFileRef = useRef(null);
  const presenterRef = useRef(null);

  const videoConstraints = {
    width: 596,
    height: 620,
    facingMode: { exact: "user" },
  };

  useEffect(() => {
    presenterRef.current = new DetectPresenter({
      setLoading,
      setResult,
      // setError,
    });
  }, []);

  const handleOpenExplorer = () => {
    inputFileRef.current.click();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // hanya ambil satu file
    if (file && file.type.startsWith("image/")) {
      const objectUrl = URL.createObjectURL(file);
      setImageUrl(objectUrl);
      setIsCapture(true);
      setResult(null);
      // setError(null);
    } else {
      alert("Mohon pilih file gambar saja.");
    }
  };

  const capture = () => {
    setImageUrl(webcamRef.current.getScreenshot());
    setIsCapture(true);
    setResult(null);
    // setError(null);
  };

  const reset = () => {
    setImageUrl("");
    setIsCapture(false);
    setResult(null);
    // setError(null);
  };

  const handleLoading = () => {
    console.log("Webcam sudah siap");
    setLoading(false);
  };

  const toggleCamera = () => {
    setCameraActive((prev) => !prev);
    reset(); // reset gambar dan hasil deteksi
  };

  const handleCameraError = (err) => {
    console.error("Webcam access error:", err);
    setCameraAllowed(false); // Kamera tidak diizinkan
    alert("Kamera tidak diizinkan. Silakan upload gambar secara manual.");
  };

const handleDetect = async () => {
  if (!isCapture) {
    alert("Silakan ambil atau unggah gambar dulu");
    return;
  }

  setLoadingPredict(true);
  setResult(null);
  setError(null);

  try {
    if (imgUrl.startsWith("data:image/")) {
      await presenterRef.current.detectImage(imgUrl);
    } else {
      const res = await fetch(imgUrl);
      const blob = await res.blob();
      await presenterRef.current.detectImage(blob);
    }
  } catch {
    setError("Gagal membaca file gambar, coba upload ulang.");
  } finally {
    setLoadingPredict(false);
  }
};

  return (
    <section className="pt-16 pb-4 grid grid-cols-12 min-h-screen grid-rows-[auto_1fr]">
      <header className="col-span-12 text-center">
        <h1 className="about-title font-baloo text-heading-5 sm:text-heading-4 md:text-heading-3 lg:text-heading-1 text-center py-4 text-primary-100">
          Yuk, Deteksi kue tradisionalmu!
        </h1>
      </header>

      <div className="col-span-4 col-start-5 flex  flex-col gap-6 p-4 bg-white rounded-lg">
        <div className="wecam h-full border rounded-lg">
          {loading && cameraAllowed && (
            <div className="bg-slate-200 w-full h-full rounded-lg flex justify-center items-center flex-col gap-2">
              <div>
                <img src="/assets/icons/camera40x40.svg" alt="camera" />
              </div>
              <p className="text-body-xs-regular text-black-60">
                Ambil atau unggah gambar kue
              </p>
            </div>
          )}

          {!isCapture && cameraAllowed ? (
            <Webcam
              height={720}
              width={1280}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              onUserMedia={handleLoading}
              onUserMediaError={handleCameraError}
              className="rounded-lg"
            />
          ) : (
            (!cameraAllowed || isCapture) && (
              <div className="upload-placeholder">
                {!isCapture ? (
                  <>
                    <div className="flex flex-col">
                      <img src="/assets/icons/camera-slash.svg" alt="camera" />
                      <p className="text-center text-gray-500">
                        Kamera tidak aktif, silakan upload gambar.
                      </p>
                    </div>
                  </>
                ) : (
                  <img
                    src={imgUrl}
                    alt="Preview"
                    className="rounded-lg w-full"
                  />
                )}
              </div>
            )
          )}
        </div>

        <div className="button-wrapper flex justify-center gap-6">
          {!isCapture ? (
            <>
              <Button
                text="Upload Gambar"
                onClick={handleOpenExplorer}
                icon="/assets/icons/upload.svg"
                className="bg-white text-primary-100 border border-primary-100 w-full "
              />
              <input
                hidden
                type="file"
                accept="image/*"
                ref={inputFileRef}
                onChange={handleFileChange}
              />

              <Button
                text="Ambil Gambar"
                icon="/assets/icons/camera.svg"
                onClick={capture}
                className="bg-primary-100 text-white border border-primary-100 w-full"
              />
            </>
          ) : (
            <Button
              text="Ganti Gambar"
              icon="/assets/icons/reset.svg"
              onClick={reset}
              className="bg-warning-100 text-white border border-warning-100 "
            />
          )}
        </div>
        <div className="button-detection flex">
          <Button
            text="Deteksi Sekarang"
            icon="/assets/icons/detect.svg"
            onClick={handleDetect}
            className="bg-primary-100 text-white border border-primary-100 w-full"
          />
          {loadingPredict && (
            <div className="loading-overlay fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
              <DotLottieReact
                src="https://lottie.host/67fd4845-d028-4c65-87fd-e4fae56e6973/qQOdBqThMm.lottie"
                autoplay
                loop
                style={{ width: 400, height: 400 }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CameraSection;
