const SkeletonUMKMCard = () => {
  return (
    <div className="animate-pulse border border-gray-300 rounded-lg p-4 bg-gray-100 flex flex-col justify-between">
      <div className="h-40 bg-gray-300 rounded mb-4"></div>{" "}
      {/* Placeholder gambar */}
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>{" "}
      {/* Placeholder nama */}
      <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>{" "}
      {/* Placeholder alamat */}
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-1"></div>{" "}
      {/* Placeholder no_telp */}
      <div className="h-4 bg-gray-300 rounded w-1/3"></div>{" "}
      {/* Placeholder paling diminati */}
    </div>
  );
};

const SkeletonTitle = () => {
  return (
    <div className="animate-pulse bg-gray-300 rounded w-64 h-10 mb-4"></div>
  );
};

import { useApi } from "../../../hooks/useApi";
import UMKMCard from "../../UMKMCard";

const UmkmSellerListSection = ({ id }) => {
  const { result, loading, error } = useApi(
    "recommendation",
    "GET",
    null,
    id,
    null,
    !!id
  );

  const data = result?.data;

  return (
    <section className="card grid grid-cols-1 md:grid-cols-3 gap-4 bg-primary-20 p-4 rounded-lg md:px-32 text-primary-100 pb-10">
      <div className="header md:col-span-3">
        {loading ? (
          <SkeletonTitle />
        ) : (
          <h1 className="text-primary-600 font-semibold mb-2 font-baloo text-heading-1">
            Dijual oleh UMKM Berikut
          </h1>
        )}
      </div>

      <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-10">
        {loading
          ? [1, 2, 3].map((i) => <SkeletonUMKMCard key={i} />)
          : data?.map((item) => (
              <UMKMCard
                key={item.id}
                imgPosition="bottom"
                image_url={item.image_url}
                nama={item.nama}
                alamat={item.alamat}
                no_telp={item.no_telp}
                paling_diminati={item.paling_diminati}
                animateType="fade-up"
                animateOffset="10"
                animateDuration="1000"
              />
            ))}
      </div>
    </section>
  );
};

export default UmkmSellerListSection;
