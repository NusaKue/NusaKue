import { useState, useRef, useEffect, useCallback } from "react";
import Webcam from "react-webcam";
import Button from "../../Button";
import toast, { Toaster } from "react-hot-toast";

const CameraSection = ({ setImage }) => {
  const [loading, setLoading] = useState(true);
  const [loadingPredict, setLoadingPredict] = useState(false);
  const [imgUrl, setImageUrl] = useState("");
  const [isCapture, setIsCapture] = useState(false);
  const [cameraAllowed, setCameraAllowed] = useState(true);
  const [facingMode, setFacingMode] = useState("user");

  const webcamRef = useRef(null);
  const inputFileRef = useRef(null);

  const videoConstraints = {
    width: 596,
    height: 620,
    facingMode,
  };

  const handleOpenExplorer = () => {
    inputFileRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const objectUrl = URL.createObjectURL(file);
      setImageUrl(objectUrl);
      setIsCapture(true);
    } else {
      toast.error("Mohon pilih file gambar saja.");
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
    setLoading(false);
  };

  const handleCameraError = (err) => {
    console.error("Webcam access error:", err);
    setCameraAllowed(false);
    toast.error("Kamera tidak diizinkan. Silakan upload gambar secara manual.");
  };

  const handleDetect = async () => {
    if (!isCapture) {
      toast.error("Silakan ambil atau unggah gambar dulu.");
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
        toast.error("Format gambar tidak dikenali.");
      }
    } catch (error) {
      console.error("Gagal membaca file gambar:", error);
      toast.error("Gagal membaca file gambar, coba upload ulang.");
    } finally {
      setLoadingPredict(false);
    }
  };

  const toggleFacingMode = () => {
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
    reset();
    setLoading(true);
  };

  return (
    <section className="grid grid-cols-4 min-h-screen px-4 py-8 md:grid-cols-12 h-fit grid-rows-[auto_1fr] md:pt-16">
      <Toaster position="top-center" />

      <header className="col-span-12 text-center">
        <h1 className="about-title font-baloo text-heading-4 sm:text-heading-4 md:text-heading-1 text-center py-6 text-primary-100">
          Yuk, Deteksi kue tradisionalmu!
        </h1>
      </header>

      <div className="col-span-4 md:col-start-5 flex flex-col gap-6 p-4 bg-white rounded-lg shadow-xl h-fit">
        <div className="wecam border rounded-lg bg-slate-200 relative">
          <div className="absolute bottom-2 right-2 z-40 md:hidden">
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
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              onUserMedia={handleLoading}
              onUserMediaError={handleCameraError}
              className="rounded-lg"
              key={facingMode}
            />
          ) : (
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
            disabled={!isCapture || loadingPredict}
            className="bg-primary-100 text-white border border-primary-100 w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CameraSection;
