const ProductDetailHeaderSection = ({ data, error }) => {
  if (error) {
    toast.error("Terjadi kesalahan saat memuat data produk.");
    return null;
  }
  if (!data) {
    return (
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-12 gap-6 px-4 py-8 h-screen">
        {/* Skeleton Image */}
        <div className="col-span-4 sm:col-span-4 md:col-span-5 md:col-start-2 flex justify-center items-center">
          <div className="w-full sm:w-3/4 md:w-11/12 h-48 sm:h-64 md:h-3/4 bg-gray-300 rounded-lg animate-pulse" />
        </div>

        {/* Skeleton Content */}
        <div className="col-span-4 sm:col-span-4 md:col-span-5 md:col-start-7 space-y-4">
          {/* Title */}
          <div className="h-8 sm:h-10 bg-gray-300 rounded w-3/4 sm:w-2/3 md:w-3/4 animate-pulse" />

          {/* Origin */}
          <div className="h-5 bg-gray-300 rounded w-1/2 sm:w-1/3 md:w-1/2 animate-pulse" />

          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse" />
            <div className="h-4 bg-gray-300 rounded w-4/6 animate-pulse" />
          </div>

          {/* Section Header */}
          <div className="h-6 sm:h-7 bg-gray-300 rounded w-1/3 animate-pulse mt-6" />

          {/* Ingredients List */}
          <ul className="space-y-2">
            {[...Array(5)].map((_, i) => (
              <li
                key={i}
                className="h-4 bg-gray-300 rounded w-full animate-pulse"
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 px-4 py-8 md:grid-cols-12 lg:pt-32 lg:pb-8 md:gap-10">
      <div className="col-span-4 md:col-span-5 md:col-start-2 flex justify-center mb-3 items-center">
        <img
          src={data.image_url}
          alt={data.nama}
          className="rounded-lg object-cover w-full h-full md:w-11/12 md:h-3/4"
        />
      </div>

      <div className="col-span-4 md:col-span-5 md:col-start-7 text-primary-100 m-auto space-y-4">
        <h2 className="font-baloo font-bold text-heading-4 sm:text-heading-3 md:text-heading-2 lg:text-heading-1">
          {data.nama}
        </h2>

        <div className="flex items-center font-poppins text-body-md-medium lg:text-body-lg-medium gap-2">
          <img src="/assets/icons/Location.svg" alt="" className="w-5" />
          <span>
            Asal: {data.asal.join(", ")}
          </span>
        </div>

        <p className="font-poppins text-body-md-regular">
          {data.deskripsi}
        </p>

        <h3 className="font-baloo text-heading-5 sm:text-heading-4 md:text-heading-3 lg:text-heading-2">
          Bahan-Bahan
        </h3>
        <ul className="list-disc list-inside space-y-1 font-poppins text-body-md-regular">
          {data.bahan_pembuatan.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailHeaderSection;
