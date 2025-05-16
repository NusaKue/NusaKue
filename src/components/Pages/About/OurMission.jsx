const OurMission = () => {
  return (
    <section className="our-mission bg-primary-100 py-24 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-14">
      <div className="mission-content text-white pb-6">
        <h2 className="mission-title font-baloo text-heading-2 mb-4">
          Misi Kami
        </h2>
        <p className="font-poppins text-body-lg-regular">
          Kami bertujuan untuk menjembatani teknologi dan tradisi dengan
          menciptakan platform yang mudah diakses untuk membantu melestarikan
          warisan kuliner Indonesia sekaligus mendukung UMKM.
        </p>
      </div>
      <div className="mission-content text-white grid grid-cols-12 gap-6">
        <div className="col-span-6 flex gap-4">
          <img
            src="/assets/logo/love.svg"
            className="w-5 lg:w-6 object-contain"
            alt=""
          />
          <div>
            <h3 className="mission-title font-baloo text-heading-3 mb-4">
              Melestarikan Budaya
            </h3>
            <p className="font-poppins text-body-lg-regular">
              Dokumentasi dan berbagi pengetahuan tentang kue-kue tradisiona
              indonesia untuk generasi mendatang.
            </p>
          </div>
        </div>
        <div className="col-span-6 flex gap-4">
          <img
            src="/assets/logo/together.svg"
            className="w-5 lg:w-6 object-contain"
            alt=""
          />
          <div>
            <h3 className="mission-title font-baloo text-heading-3 mb-4">
              Memberdayakan UMKM
            </h3>
            <p className="font-poppins text-body-lg-regular">
              Mendukung UMKM dengan menghubungkan mereka, dengan pelanggan
              melalui teknologi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
