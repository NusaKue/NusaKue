import { useEffect, useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Button from "../../Button";

const ResultPredict = ({ imageData, setIdData, setLoading }) => {
  const [isIdDataSent, setIsIdDataSent] = useState(false);
  const { result, loading, error, refetch } = useApi(
    "predict",
    "POST",
    null,
    null,
    imageData,
    !!imageData
  );

  console.log("ini loading", loading);
  useEffect(() => {
    if (imageData) {
      setIsIdDataSent(false); // Reset status pengiriman saat imageData berubah
      refetch();
    }
  }, [imageData, refetch]);

  useEffect(() => {
    if (result && result.data && result.data.id_kue) {
      setIdData(result.data.id_kue);
      setIsIdDataSent(true); // Tandai bahwa data ID sudah terkirim
    } else {
      setIdData(null);
      setIsIdDataSent(true);
    }
  }, [result, setIdData]);
  const showLoading = loading || (result && !isIdDataSent);

  if (showLoading) {
    return (
      <div className="loading-overlay fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <DotLottieReact
          src="https://lottie.host/67fd4845-d028-4c65-87fd-e4fae56e6973/qQOdBqThMm.lottie"
          autoplay
          loop
          style={{ width: 400, height: 400 }}
        />
      </div>
    );
  }

  if (error) {
    return (
      <section className="result-predict grid grid-cols-12 bg-primary-20 p-4 rounded-lg">
        <div className="card  bg-white col-span-4 col-start-5 flex rounded-lg shadow-md">
          <div className="card-body p-4 flex flex-col justify-center">
            <div className="flex items-center space-x-3 mb-1">
              <h1 className="card-title text-error-60 font-semibold text-lg text-center">
                Hmm... kue-nya lagi sembunyi! Coba kirim gambar yang berbeda,
                yuk!
              </h1>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!result) return null;
  const data = result.data;

  return (
    <section className="result-predict grid-cols-4 font-poppins grid md:grid-cols-11 bg-primary-20 p-4 rounded-lg">
      <div className="card bg-white col-span-4 flex flex-col md:col-span-5 md:col-start-4 md:flex-row rounded-lg shadow-md">
        <div className="card-image my-auto p-4 flex justify-center">
          <img
            src={data.image_url}
            alt="Klepon"
            className="w-full md:w-36 md:h-36 bg-cover object-cover rounded-lg"
          />
        </div>

        <div className="card-body p-4 flex flex-col justify-center gap-2">
          <div className="md:space-x-3 mb-1 flex justify-between">
            <h1 className="card-title text-primary-100 font-semibold text-body-lg-regular">
              {data.nama}
            </h1>
            <span className="text-primary-100 flex-shrink-0 border rounded-full text-center text-body-md-medium px-4 py-1 min-w-[90px] inline-flex items-center justify-center">
              Cocok {data.skor}
            </span>

          </div>
          <h2 className="text-primary-100 font-semibold">
            Asal: {data.asal.map((item) => item + ", ")}
          </h2>
          <p className="text-primary-100 text-sm max-w-lg mb-2">
            {data.deskripsi.length > 100
              ? data.deskripsi.slice(0, 100) + "..."
              : data.deskripsi}
          </p>
          <div className="inline md:block">
            <Button
              text="Lihat Detail"
              //   icon="/assets/icons/reset.svg"
              link={`/Deteksi-Kue/${data.id_kue}`}
              className="bg-primary-100 text-white w-full md:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultPredict;
