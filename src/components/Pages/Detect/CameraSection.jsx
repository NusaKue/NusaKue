import { useState, useRef, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import Button from "../../Button";

const CameraSection = () => {
  const [loading, setLoading] = useState(true);
  const [imgUrl, setImageUrl] = useState("");
  const [isCapture, setIsCapture] = useState(false);

  const webcamRef = useRef(null);
  const inputFileRef = useRef(null);

  const handleOpenExplorer = () => {
    inputFileRef.current.click();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // hanya ambil satu file
    if (file && file.type.startsWith("image/")) {
      const objectUrl = URL.createObjectURL(file);
      setImageUrl(objectUrl);
      setIsCapture(true);
    } else {
      alert("Mohon pilih file gambar saja.");
    }
  };

  const capture = () => {
    setImageUrl(webcamRef.current.getScreenshot());
    setIsCapture(true);
  };

  const reset = () => {
    setImageUrl("");
    setIsCapture(false);
  };

  const videoConstraints = {
    width: 596,
    height: 620,
    facingMode: "user",
  };

  const handleLoading = () => {
    console.log("Webcam sudah siap");
    setLoading(false);
  };

  return (
    <section className="py-16 grid grid-cols-12 min-h-screen grid-rows-[auto_1fr]">
      <header className="col-span-12 text-center">
        <h1 className="about-title font-baloo text-heading-5 sm:text-heading-4 md:text-heading-3 lg:text-heading-1 text-center py-4">
          Yuk, Deteks kue tradisionalmu!
        </h1>
      </header>

      <div className="col-span-4 col-start-5 flex  flex-col gap-6 p-4 bg-white rounded-lg">
        <div className="wecam h-full">
          {loading && (
            <div className="bg-slate-200 w-full h-full rounded-lg flex justify-center items-center flex-col gap-2">
              <div>
                <img src="/assets/icons/camera40x40.svg" alt="camera" />
              </div>
              <p className="text-body-xs-regular text-black-60">
                Ambil atau unggah gambar kue
              </p>
            </div>
          )}

          {!isCapture ? (
            <Webcam
              height={720}
              width={1280}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              onUserMedia={handleLoading}
              className="rounded-lg"
            />
          ) : (
            <img src={imgUrl} alt="" className="rounded-lg" />
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
            className="bg-primary-100 text-white border border-primary-100 w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CameraSection;
