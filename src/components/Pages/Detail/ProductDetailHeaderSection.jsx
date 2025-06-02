
const ProductDetailHeaderSection = ({ data }) => {
  if (!data) {
    // Skeleton Loading UI
    return (
      <div className="grid grid-cols-12 h-screen lg:pt-32 lg:pb-8 gap-10">
        {/* Skeleton gambar */}
        <div className="col-span-5 col-start-2 flex justify-center items-center h-full">
          <div className="w-11/12 h-3/4 bg-gray-300 rounded-lg animate-pulse" />
        </div>

        {/* Skeleton teks */}
        <div className="col-span-5 col-start-7 text-primary-100 space-y-4 flex flex-col justify-center h-full">
          {/* Skeleton judul */}
          <div className="h-10 bg-gray-300 rounded w-3/4 animate-pulse" />

          {/* Skeleton asal */}
          <div className="h-5 bg-gray-300 rounded w-1/2 animate-pulse" />

          {/* Skeleton deskripsi */}
          <div className="h-4 bg-gray-300 rounded w-full animate-pulse" />
          <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse" />
          <div className="h-4 bg-gray-300 rounded w-4/6 animate-pulse" />

          {/* Skeleton subjudul bahan-bahan */}
          <div className="h-7 bg-gray-300 rounded w-1/3 animate-pulse mt-6" />

          {/* Skeleton list bahan */}
          <ul className="list-disc list-inside space-y-2">
            {[...Array(5)].map((_, i) => (
              <li
                key={i}
                className="h-4 bg-gray-300 rounded w-full animate-pulse"
              ></li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-4 px-4 py-8 md:grid-cols-12 lg:pt-32 lg:pb-8 md:gap-10 ">
      <div className="col-span-4 md:col-span-5 md:col-start-2 flex justify-center mb-3 items-center">
        <img
          src={data?.image_url}
          alt="Klepon"
          className="rounded-lg object-cover w-full h-full md:w-11/12 md:h-3/4"
        />
      </div>

      <div className="col-span-5 md:col-start-7 text-primary-100 m-auto">
        <h2 className="text-heading-1 font-baloo font-bold mb-3">
          {data?.nama}
        </h2>
        <div className="flex items-center text-sm mb-3 text-body-md-medium font-poppins">
          <span>Asal: {data?.asal.map((item) => item + ", ")}</span>
        </div>
        <p className="text-sm mb-4 text-body-md-medium">{data?.deskripsi}</p>

        <h3 className="font-semibold text-heading-3 mb-2 font-baloo">
          Bahan-Bahan
        </h3>
        <ul className="list-disc list-inside text-sm space-y-1 font-poppins text-body-sm-medium">
          {data?.bahan_pembuatan.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailHeaderSection;
