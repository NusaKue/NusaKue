import StepCard from "../../StepCard";
import "aos/dist/aos.css"

const HowItWorks = () => {
  return (
    <section className="how-it-works bg-primary-100 px-64 grid grid-cols-3 grid-rows-[auto_1fr]">
      <div className="header col-span-3 text-center">
        <h1 className="text-heading-2 text-white py-14 font-baloo" data-aos="fade-down">
          Bagaimana Cara Kerjanya
        </h1>
      </div>

      <StepCard
        icon="/public/assets/icons/camera40x40.svg"
        title="Ambil Gambar"
        desc="Ambil atau unggah gambar dari kue tradisional apapun"
        animateType="fade-right"
        animateOffset="100"
        animateDuration="1000"
      />
      <StepCard
        icon="/public/assets/icons/detect.svg"
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
        animateType="fade-left"
        animateOffset="100"
        animateDuration="1000"
      />
    </section>
  );
};

export default HowItWorks;
