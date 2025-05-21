import Button from "../../Button";

const HeroSection = () => {
  return (
    <section className="hero grid h-fit gap-10 md:gap-0 my-8 md:my-0 md:mt-0 md:h-[calc(100vh-64px)] grid-cols-4 px-6 md:grid-cols-12 md:px-36">
    
      <div className="hero-container h-fit md:h-screen col-span-4 grid md:col-span-5 ">
        <div className="hero-content h-fit md:h-screen font-baloo flex flex-col gap-6 text-primary-100 md:justify-center md:gap-10">
          <h1 className="hero-title text-heading-2 md:text-6xl ">
            Kenali Kue Tradisional Indonesia Hanya Dengan Satu Foto
          </h1>

          <p className="font-poppins text-body-sm-regular md:text-body-xl-regular ">
            Situs web ini membantu pengguna mengenali kue tradisional Indonesia
            menggunakan AI dan menyarankan usaha kecil (UMKM) yang menjualnya.
          </p>

          <div className="hero-button flex flex-col align-items gap-4 md:flex-row sm:flex-row">
            <Button
              text="Mulai Deteksi"
              className="bg-primary-100 text-white border border-primary-100 w-full sm:w-auto"
              icon="/assets/icons/camera.svg"
              link={"/Deteksi-Kue"}
              colorHover="primary"
            />
            <Button
              text="Cari UMKM"
              className="bg-white text-primary-100 border border-primary-100 w-full sm:w-auto"
              icon="/assets/icons/market.svg"
            />
          </div>
        </div>
      </div>

      <div className="hero-image order-first col-span-4 col-start-1 md:order-none md:col-span-6 md:col-start-8 md:m-auto">
        <img
          className="w-auto h-full bg-cover object-cover rounded-2xl md:h-auto md:m-auto"
          src="/assets/images/klepon.jpg"
          alt="Kue Klepon"
        />
      </div>
    </section>
  );
};

export default HeroSection;
