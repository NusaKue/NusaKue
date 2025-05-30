import StepCard from "../../StepCard";
import "aos/dist/aos.css";

const HowItWorks = () => {
  return (
    <section className="bg-primary-100 grid grid-cols-3 py-10 sm:grid-cols-3 md:grid-cols-3 md:justify-items-center px-6 md:px-36">

      <div className="header col-span-4 sm:col-span-3 text-center pb-10 md:col-span-5">
        <h1 className="text-heading-2 text-white font-baloo" data-aos="fade-up" data-aos-duration="500"> 
          Bagaimana Cara Kerjanya
        </h1>
      </div>

      <div className="grid col-span-3 gap-10 sm:col-span-3 md:grid-cols-1 lg:grid-cols-3 md:col-start-1 md:justify-items-center">
        <StepCard
          icon="/public/assets/icons/camera40x40.svg"
          title="Ambil Gambar"
          desc="Ambil atau unggah gambar dari kue tradisional apapun"
          animateType="fade-up"
          animateOffset="100"
          animateDuration="1000"
        />
        <StepCard
          icon="/public/assets/icons/detect40x40.svg"
          title="Deteksi AI"
          desc="Kami akan mengidentifikasi kue dan memberikan informasi secara rinci"
          animateType="fade-up"
          animateOffset="100"
          animateDuration="1000"
        />
        <StepCard
          icon="/public/assets/icons/market40x40.svg"
          title="Cari UMKM"
          desc="Temukan penjual UMKM lokal di dekat Anda"
          animateType="fade-up"
          animateOffset="100"
          animateDuration="1000"
        />
      </div>
    </section>
  );
};

export default HowItWorks;
