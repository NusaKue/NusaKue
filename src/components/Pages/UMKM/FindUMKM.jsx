import { useState, useEffect } from "react";
import SearchBar from "../../SearchBar";
import UMKMCard from "../../UMKMCard";
import { useApi } from "../../../hooks/useApi";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Masonry from "react-masonry-css";

const FindUMKM = () => {
  const { result, loading, error, refetch } = useApi(
    "umkms",
    "GET",
    null,
    null,
    null,
    true
  );
  const data = result?.data;
  const [filteredData, setFilteredData] = useState(data);
  const [query, setQuery] = useState("");
  console.log(filteredData);
  
  // Konfigurasi breakpoint masonry
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    768: 2,
    500: 1,
  };

  useEffect(() => {
    if (!loading && data) {
      setFilteredData(data);
    }
  }, [loading, data]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (data) {
      if (query.trim() === "") {
        setFilteredData(data);
      } else {
        const lowerQuery = query.toLowerCase();
        const filtered = data.filter((item) =>
          item.nama.toLowerCase().includes(lowerQuery)
        );
        setFilteredData(filtered);
      }
    }
  }, [query, data]);

  if (error) {
    return (
      <p className="text-center text-red-600 font-poppins mt-10">
        Terjadi kesalahan: {error.message}
      </p>
    );
  }

  return (
    <section className="find-umkm h-screen px-6 sm:px-8 md:px-12 lg:px-24 mt-3 md:mt-4 lg:mt-16 py-8 sm:py-10 md:py-14 lg:py-16">
      <div className="umkm-header text-primary-100 lg:mx-20">
        <h1 className="umkm-title font-baloo text-heading-5 sm:text-heading-4 md:text-heading-3 lg:text-heading-1 text-center pb-7 sm:pb-8 md:pb-9 lg:pb-10">
          Jelajahi Kue Tradisional dari Beberapa Daerah Pilihan!
        </h1>
      </div>

      <SearchBar
        icon="/assets/icons/Search.svg"
        placeholder="Cari"
        value={query}
        onChange={handleSearchChange}
      />

      <div>
        {loading || !data ? (
          <div className="flex justify-center items-center py-6">
            <DotLottieReact
              src="https://lottie.host/674c6c90-9815-4c01-a8fe-a809d2373d1a/VcJBJZNT0a.lottie"
              autoplay
              loop
              style={{ width: 400, height: 400 }}
            />
          </div>
        ) : (
          <>
            <div className="pb-7 sm:pb-8 md:pb-9 lg:pb-10">
              <h1 className="umkm-title font-baloo text-heading-5 sm:text-heading-4 md:text-heading-3 lg:text-heading-2 text-center text-primary-100">
                Daftar UMKM
              </h1>
            </div>

            {/* Masonry Layout */}
            {filteredData?.length > 0 ? (
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {filteredData?.map((item) => (
                  
                  <div key={item.id} className="mb-6">
                    <UMKMCard
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
                  </div>
                ))}
              </Masonry>
            ) : (
              <p className="text-center text-primary-100 font-poppins text-lg">
                Tidak ada UMKM yang cocok dengan pencarianmu.
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default FindUMKM;
