import StepCard from "../../StepCard";
import "aos/dist/aos.css";

const HowItWorks = () => {
  return (
    <section className="bg-primary-100 grid grid-cols-3">
      <div className="header col-span-4 flex justify-center ">
        <h1 className="text-heading-2 text-white font-baloo space-y-4">
          Bagaimana Cara Kerjanya
        </h1>
      </div>

      <div className="grid col-span-4 md:grid-cols-3">
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
      </div>
    </section>
  );
};

export default HowItWorks;
