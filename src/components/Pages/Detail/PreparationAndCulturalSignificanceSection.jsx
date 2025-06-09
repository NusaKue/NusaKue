import DescriptionCard from "../../DescriptionCard.jsx";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const PreparationAndCulturalSignificanceSection = ({
  cara_pembuatan,
  budaya,
  loading,
}) => {
  if (!cara_pembuatan && !budaya) {
    return (
      <>
        <section className="bg-white py-6 px-2 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mission-card py-6 px-6 grid grid-cols-[auto_1fr] gap-4 rounded shadow-lg bg-gray-50 animate-pulse">
            <div className="mission-icon flex items-start">
              <div className="w-6 h-6 bg-gray-300 rounded" />
            </div>

            <div className="mission-content space-y-3">
              <div className="h-8 bg-gray-300 rounded w-3/4" />

              <div className="h-5 bg-gray-300 rounded w-full" />
              <div className="h-5 bg-gray-300 rounded w-5/6" />
              <div className="h-5 bg-gray-300 rounded w-4/6" />
            </div>
          </div>

          <div className="mission-card py-6 px-6 grid grid-cols-[auto_1fr] gap-4 rounded shadow-lg bg-gray-50 animate-pulse">
            <div className="mission-icon flex items-start">
              <div className="w-6 h-6 bg-gray-300 rounded" />
            </div>

            <div className="mission-content space-y-3">
              <div className="h-8 bg-gray-300 rounded w-3/4" />

              <div className="h-5 bg-gray-300 rounded w-full" />
              <div className="h-5 bg-gray-300 rounded w-5/6" />
              <div className="h-5 bg-gray-300 rounded w-4/6" />
            </div>
          </div>
        </section>

        <div className="loading-overlay fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-20">
          <DotLottieReact
            src="https://lottie.host/674c6c90-9815-4c01-a8fe-a809d2373d1a/VcJBJZNT0a.lottie"
            autoplay
            loop
            style={{ width: 400, height: 400 }}
          />
        </div>
      </>
    );
  }

  return (
    <section className="bg-white grid grid-cols-1 md:grid-cols-2 py-6 px-2 md:px-24 ">
      <div className="flex flex-col lg:flex-row col-span-2  gap-6">
        <DescriptionCard
          title="Cara Pembuatan"
          desc={cara_pembuatan}
          className={"text-primary-100"}
        />
        <DescriptionCard
          title="Budaya"
          desc={budaya}
          className={"text-primary-100"}
        />
      </div>
    </section>
  );
};

export default PreparationAndCulturalSignificanceSection;
