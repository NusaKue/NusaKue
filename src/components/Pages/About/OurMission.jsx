import MissionCard from "../../MissionCard.jsx";

const OurMission = () => {
  return (
    <section className="our-mission bg-primary-100 px-6 sm:px-8 md:px-12 lg:px-24 py-8 sm:py-10 md:py-14 lg:py-24">
      <div className="mission-content text-white pb-4 sm:pb-5 md:pb-6 lg:pb-7 col-span-2">
        <h2 className="mission-title font-baloo text-heading-5 sm:text-heading-4 md:text-heading-3 lg:text-heading-2 pb-2 sm:pb-3 md:pb-4 lg:pb-5 text-center">
          Misi Kami
        </h2>
        <p className="font-poppins text-body-md-regular lg:text-body-lg-regular text-center">
          Kami bertujuan untuk menjembatani teknologi dan tradisi dengan
          menciptakan platform yang mudah diakses untuk membantu melestarikan
          warisan kuliner Indonesia sekaligus mendukung UMKM.
        </p>
      </div>

      <div className="grid-cols-1 lg:grid-cols-2 grid gap-4 lg:gap-5 items-start">
        <MissionCard
          icon="/public/assets/icons/love.svg"
          title="Melestarikan Budaya"
          desc="Dokumentasi dan berbagi pengetahuan tentang kue-kue tradisional Indonesia untuk generasi mendatang"
        />
        <MissionCard
          icon="/public/assets/icons/together.svg"
          title="Memberdayakan UMKM"
          desc="Mendukung UMKM dengan menghubungkan mereka, dengan pelanggan melalui teknologi"
        />
      </div>
    </section>
  );
};

export default OurMission;
