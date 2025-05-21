import MissionCard from "../../MissionCard.jsx";
const OurMission = () => {
  return (
    <section className="our-mission bg-primary-100 px-24 grid grid-rows-2 grid-cols-2 py-16">
      <div className="mission-content text-white pb-12 col-span-2">
        <h2 className="mission-title font-baloo text-heading-1 py-7 text-center">
          Misi Kami
        </h2>
        <p className="font-poppins text-body-md-regular text-center">
          Kami bertujuan untuk menjembatani teknologi dan tradisi dengan
          menciptakan platform yang mudah diakses untuk membantu melestarikan
          warisan kuliner Indonesia sekaligus mendukung UMKM.
        </p>
      </div>

      <MissionCard
        icon="/public/assets/icons/love.svg"
        title="Melestarikan Budaya"
        desc="Dokumentasi dan berbagi pengetahuan tentang kue-kue tradisiona indonesia untuk generasi mendatang"
      />
      <MissionCard
        icon="/public/assets/icons/together.svg"
        title="Memberdayakan UMKM"
        desc="Mendukung UMKM dengan menghubungkan mereka, dengan pelanggan melalui teknologi"
      />
    </section>
  );
};

export default OurMission;
