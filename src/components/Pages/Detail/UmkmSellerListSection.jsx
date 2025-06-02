import { useApi } from "../../../hooks/useApi";
import UMKMCard from "../../UMKMCard";

const UmkmSellerListSection = ({ id }) => {
  const { result, loading, error, refetch } = useApi(
    "recommendation",
    "GET",
    null,
    id,
    null,
    !!id // aktifkan fetch hanya kalau id ada
  );

  const data = result?.data;
  console.log(data);

  return (
    <section className="card grid grid-cols-1 md:grid-cols-3 gap-4 bg-primary-20 p-4 rounded-lg md:px-32 text-primary-100 pb-10">
      <div className="header md:col-span-3">
        <h1 className="text-primary-600 font-semibold mb-2 font-baloo text-heading-1">
          Dijual oleh UMKM Berikut
        </h1>
      </div>

      <div className="flex flex-wrap md:flex-nowrap md:col-span-3 gap-10">
        {data?.map((data) => (
          <UMKMCard
            key={data.id}
            imgPosition="bottom"
            image_url={data.image_url}
            nama={data.nama}
            alamat={data.alamat}
            no_telp={data.no_telp}
            paling_diminati={data.paling_diminati}
          />
        ))}
      </div>
    </section>
  );
};

export default UmkmSellerListSection;
