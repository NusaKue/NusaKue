import { useApi } from "../../../hooks/useApi";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import PopularCakesCard from "../../PopularCakesCard";
import Button from "../../Button";

const PopularCakes = () => {
  const { result, loading, error, refetch } = useApi(
    "top-predictions",
    "GET",
    null,
    null,
    null
  );
  const data = result?.data;
  console.log(data);

  if (error) {
    return (
      <section className="flex justify-center items-center min-h-[300px]">
        <p className="text-red-500 text-lg">Failed to load data.</p>
      </section>
    );
  }

  return (
    <section className="popular-cakes flex flex-wrap justify-center gap-5 py-10 md:px-36 px-6">
      <div className="header font-baloo text-primary-100 text-center text-heading-2 w-full">
        <h1
          className="text-heading-2 text-center flex items-center gap-2 pb-10 justify-center font-baloo"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Kue Paling Banyak diPrediksi{" "}
          <span className="hidden md:block">🏆</span>
        </h1>
      </div>

      {loading || !data ? (
        <div className="loading-overlay flex justify-center w-full">
          <DotLottieReact
            src="https://lottie.host/674c6c90-9815-4c01-a8fe-a809d2373d1a/VcJBJZNT0a.lottie"
            autoplay
            loop
            style={{ width: 400, height: 400 }}
          />
        </div>
      ) : (
        <>
          {data?.map((item) => (
            <PopularCakesCard
              key={item.id}
              animateType="fade-up"
              animateOffset="100"
              animateDuration="1000"
              image={item.image_url}
              name={item.nama}
              desc={item.deskripsi}
              id={item.id}
              loading={loading}
            />
          ))}
        </>
      )}
    </section>
  );
};

export default PopularCakes;
