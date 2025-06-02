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
        <div className="mission-card py-6 px-10 grid grid-cols-[auto_1fr] gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {/* Skeleton icon */}
          <div className="mission-icon flex items-start">
            <div className="w-5 lg:w-6 h-5 lg:h-6 bg-gray-300 rounded animate-pulse" />
          </div>

          {/* Skeleton content */}
          <div className="mission-content space-y-2">
            {/* Skeleton title */}
            <div className="h-6 lg:h-8 bg-gray-300 rounded w-3/4 animate-pulse" />
            {/* Skeleton description */}
            <div className="h-4 lg:h-5 bg-gray-300 rounded w-full animate-pulse" />
            <div className="h-4 lg:h-5 bg-gray-300 rounded w-5/6 animate-pulse" />
          </div>
        </div>
        <div className="loading-overlay fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
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
    <section className="bg-white grid grid-cols-1 md:grid-cols-2 py-6 px-2 md:px-10 ">
      <div className="flex flex-col md:flex-row col-span-2  gap-6">
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
