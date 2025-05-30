import Button from "../../Button";

const ResultPredict = ({ result }) => {
  if (!result) return null;

  if (result.status === "fail") {
    return (
      <section className="result-predict grid grid-cols-12 bg-primary-20 p-4 rounded-lg">
        <div className="card  bg-white col-span-4 col-start-5 flex rounded-lg shadow-md">
          <div className="card-body p-4 flex flex-col justify-center">
            <div className="flex items-center space-x-3 mb-1">
              <h1 className="card-title text-error-60 font-semibold text-lg text-center">
                Hmm... kue-nya lagi sembunyi! Coba kirim gambar yang berbeda, yuk! 
              </h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
  const data = result.data;
  
  return (
    <section className="result-predict grid grid-cols-11 bg-primary-20 p-4 rounded-lg">
      <div className="card  bg-white col-span-5 col-start-4 flex rounded-lg shadow-md">
        <div className="card-image my-auto p-4 flex flex-col justify-center">
          <img
            src={data.image_url}
            alt="Klepon"
            className="w-36 h-36 bg-cover object-cover rounded-lg"
          />
        </div>

        <div className="card-body p-4 flex flex-col justify-center">
          <div className="flex items-center space-x-3 mb-1">
            <h1 className="card-title text-primary-100 font-semibold text-lg">
              {data.nama}
            </h1>
            <span className="text-x text-primary-100 border rounded-full px-2 py-0.5 font-medium">
              Cocok {data.skor}
            </span>
          </div>
          <h2 className="text-primary-100 font-semibold mb-2">
            Asal: {data.asal.map((item) => item + ", ")}
          </h2>
          <p className="text-primary-100 text-sm mb-4 max-w-lg">
            {data.deskripsi.length > 100
              ? data.deskripsi.slice(0, 100) + "..."
              : data.deskripsi}
          </p>
          <div>
            <Button
              text="Lihat Detail"
              //   icon="/assets/icons/reset.svg"

              className="bg-primary-100 text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultPredict;
