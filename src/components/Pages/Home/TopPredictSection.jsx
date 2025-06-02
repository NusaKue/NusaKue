import { div } from "framer-motion/client";
import { useApi } from "../../../hooks/useApi";
import {DotLottieReact}  from "@lottiefiles/dotlottie-react";
const TopPredictSection = () => {
  const { result, loading, error, refetch } = useApi(
    "top-predictions",
    "GET",
    null,
    null,
    null
  );

  const data = result?.data;

  if (loading || !data) {
    return (
      <div className="loading-overlay flex justify-center items-center">
      <DotLottieReact
        src="https://lottie.host/674c6c90-9815-4c01-a8fe-a809d2373d1a/VcJBJZNT0a.lottie"
        autoplay
        loop
        style={{ width: 400, height: 400 }}
      />
      </div>
    );
  }

  if (error) {
    return (
      <section className="flex justify-center items-center min-h-[300px]">
        <p className="text-red-500 text-lg">Failed to load data.</p>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 text-primary-100">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2 justify-center">
        Top Prediksi <span className="">🏆</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {data?.map((item) => (
          <div
            key={item.id}
            className="relative group w-64 h-64 rounded-full overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
          >
            <img
              src={item.image_url}
              alt={`Prediction ${item.id}`}
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition-opacity">
              {item.nama}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopPredictSection;
