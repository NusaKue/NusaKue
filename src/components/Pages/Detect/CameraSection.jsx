import { useState, useRef, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import Button from "../../Button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const CameraSection = ({ setImage }) => {
  const [loading, setLoading] = useState(true);
  const [loadingPredict, setLoadingPredict] = useState(false);
  const [imgUrl, setImageUrl] = useState("");
  const [isCapture, setIsCapture] = useState(false);
  const [cameraAllowed, setCameraAllowed] = useState(true);
  const [facingMode, setFacingMode] = useState("user"); // "user" = depan, "environment" = belakang

  const webcamRef = useRef(null);
  const inputFileRef = useRef(null);

  const videoConstraints = {
    width: 596,
    height: 620,
    facingMode: facingMode,
  };

  const handleOpenExplorer = () => {
    inputFileRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const objectUrl = URL.createObjectURL(file);
      setImageUrl(objectUrl);
      setIsCapture(true);
    } else {
      alert("Mohon pilih file gambar saja.");
    }
  };

  const capture = () => {
    if (webcamRef.current) {
      const screenshot = webcamRef.current.getScreenshot();
      if (screenshot) {
        setImageUrl(screenshot);
        setIsCapture(true);
      }
    }
  };

  const reset = () => {
    setImageUrl("");
    setIsCapture(false);
    setImage(null);
  };

  const handleLoading = () => {
    console.log("Webcam sudah siap");
    setLoading(false);
  };

  const handleCameraError = (err) => {
    console.error("Webcam access error:", err);
    setCameraAllowed(false);
    alert("Kamera tidak diizinkan. Silakan upload gambar secara manual.");
  };

  const handleDetect = async () => {
    if (!isCapture) {
      alert("Silakan ambil atau unggah gambar dulu");
      return;
    }

    setLoadingPredict(true);

    try {
      if (imgUrl.startsWith("data:image/")) {
        setImage(imgUrl);
      } else if (imgUrl.startsWith("blob:")) {
        const response = await fetch(imgUrl);
        const blob = await response.blob();
        setImage(blob);
      } else {
        alert("Format gambar tidak dikenali.");
      }
    } catch (error) {
      console.error("Gagal membaca file gambar:", error);
      alert("Gagal membaca file gambar, coba upload ulang.");
    } finally {
      setLoadingPredict(false);
    }
  };

  // Toggle kamera depan / belakang
  const toggleFacingMode = () => {
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
    reset(); // reset gambar saat ganti kamera
    setLoading(true); // supaya loading spinner muncul saat switch kamera
  };

  return (
    <section className="grid grid-cols-4 px-4 pb-4 pt-4 md:grid-cols-12 min-h-screen grid-rows-[auto_1fr] md:pt-16">
      <header className="col-span-12 text-center">
        <h1 className="about-title font-baloo text-heading-5 sm:text-heading-4 md:text-heading-1 text-center py-4 text-primary-100">
          Yuk, Deteksi kue tradisionalmu!
        </h1>
      </header>

      <div className="col-span-4 md:col-start-5 flex flex-col gap-6 p-4 bg-white rounded-lg shadow-xl">
        <div className="wecam border h-full rounded-lg bg-slate-200 relative">
          <div className="absolute bottom-2 right-2 z-50 md:hidden">
            <Button
              icon="/assets/icons/camera-rotate.svg"
              onClick={toggleFacingMode}
              className="bg-white bg-opacity-50 rounded-full shadow-md hover:bg-opacity-100 transition"
              aria-label="Toggle Kamera Depan/Belakang"
            />
          </div>
          {loading && !loadingPredict && cameraAllowed && (
            <div className="flex justify-center items-center w-full h-full">
              <img src="/assets/icons/camera40x40.svg" alt="camera" />
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
              key={facingMode}
            />
          ) : (
            (!cameraAllowed || isCapture) && (
              <div className="upload-placeholder">
                {!isCapture ? (
                  <div className="flex flex-col">
                    <img src="/assets/icons/camera-slash.svg" alt="camera" />
                    <p className="text-center text-gray-500">
                      Kamera tidak aktif, silakan upload gambar.
                    </p>
                  </div>
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

        <div className="button-wrapper flex justify-center gap-6 flex-col md:flex-row">
          {!isCapture ? (
            <>
              <Button
                text="Upload Gambar"
                onClick={handleOpenExplorer}
                icon="/assets/icons/upload.svg"
                className="bg-white text-primary-100 border border-primary-100 w-full"
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
              className="bg-warning-100 text-white border border-warning-100"
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
        </div>
      </div>
    </section>
  );
};

export default CameraSection;
