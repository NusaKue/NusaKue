import Button from "../../Button";

const HeroSection = () => {
  return (
    <section className="hero grid grid-cols-12 py-5">

      <div className="hero-content text-primary-100 col-span-6 flex flex-col justify-center gap-6 ">
        <h1 className="hero-title font-baloo text-6xl font-semibold">
          Kenali Kue Tradisional Indonesia Hanya Dengan Satu Foto
        </h1>
        <p className="font-poppins text-body-xl-regular mt-0">
          Situs web ini membantu pengguna mengenali kue tradisional Indonesia
          menggunakan AI dan menyarankan usaha kecil (UMKM) yang menjualnya.
        </p>

        <div className="hero-button flex space-x-3">
          <Button
            text="Mulai Deteksi"
            className="bg-primary-100 text-white border border-primary-100"
            icon="/assets/icons/camera.svg"
            link={"/Deteksi-Kue"}
          />
          <Button
            text="Mulai Deteksi"
            className="bg-white text-primary-100 border border-primary-100"
            icon="/assets/icons/market.svg"
          />
        </div>
      </div>

      <div className="hero-image col-span-6 col-start-7 flex">
        <img
          className="bg-cover w-full rounded-2xl"
          src="/assets/images/klepon.jpg"
          alt=""
        />
      </div>
    </section>
  );
};

export default HeroSection;
