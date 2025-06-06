const ProductDetailHeaderSection = ({ data, error }) => {
  if (error) {
    return alert("error");
  }
  if (!data) {
    return (
      <div className="grid grid-cols-12 h-screen lg:pt-32 lg:pb-8 gap-10">
        <div className="col-span-5 col-start-2 flex justify-center items-center h-full">
          <div className="w-11/12 h-3/4 bg-gray-300 rounded-lg animate-pulse" />
        </div>

        <div className="col-span-5 col-start-7 text-primary-100 space-y-4 flex flex-col justify-center h-full">
          <div className="h-10 bg-gray-300 rounded w-3/4 animate-pulse" />

          <div className="h-5 bg-gray-300 rounded w-1/2 animate-pulse" />

          <div className="h-4 bg-gray-300 rounded w-full animate-pulse" />
          <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse" />
          <div className="h-4 bg-gray-300 rounded w-4/6 animate-pulse" />

          <div className="h-7 bg-gray-300 rounded w-1/3 animate-pulse mt-6" />

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
          alt=""
          className="rounded-lg object-cover w-full h-full md:w-11/12 md:h-3/4"
        />
      </div>

      <div className="col-span-5 md:col-start-7 text-primary-100 m-auto">
        <h2 className="font-baloo font-bold text-heading-4 sm:text-heading-3 md:text-heading-2 lg:text-heading-1 mb-4 md:mb-5 lg:mb-6">
          {data?.nama}
        </h2>
        <div className="flex items-center font-poppins  text-body-md-medium lg:text-body-lg-medium gap-2 mb-2 md:mb-3">
          <img src="\assets\icons\Location.svg" alt="" className="w-5" />
          <span>Asal: {data?.asal.map((item) => item + ", ")}</span>
        </div>
        <p className="font-poppins text-body-md-regular mb-4 md:mb-5 lg:mb-6">
          {data?.deskripsi}
        </p>

        <h3 className="font-baloo text-heading-5 sm:text-heading-4 md:text-heading-3 lg:text-heading-2 mb-2 md:mb-3">
          Bahan-Bahan
        </h3>
        <ul className="list-disc list-inside space-y-1 font-poppins text-body-md-regular">
          {data?.bahan_pembuatan.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailHeaderSection;
