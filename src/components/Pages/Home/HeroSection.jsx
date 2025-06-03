import { motion, AnimatePresence } from "framer-motion";
import Button from "../../Button";

const HeroSection = () => {
  return (
    <section className="hero grid min-h-[calc(100vh-64px)] gap-10 my-8 lg:gap-0 md:px-36 lg:my-0 lg:mt-16 lg:min-h-[calc(100vh-64px)] grid-cols-4 px-6 lg:grid-cols-12 ">
      <div className="hero-container h-fit lg:min-h-[calc(100vh-64px)] col-span-4 grid lg:col-span-6 ">
        <div className="hero-content h-fit lg:min-h-[calc(100vh-64px)] font-baloo flex flex-col gap-6 text-primary-100 lg:justify-center lg:gap-10">
          <AnimatePresence>
            <motion.div
              // key={location.pathname}
              // initial={{ opacity: 0, scale: 0 }}
              // animate={{ opacity: 1, scale: 1 }}
              // transition={{
              //   duration: 0.4,
              //   scale: { type: "spring", visualDuration: 0.4, bounce: 0.1 },
              // }}
            >
              <h1 className="hero-title text-heading-2 md:text-6xl ">
                Kenali Kue Tradisional Indonesia Hanya Dengan Satu Foto
              </h1>
            </motion.div>
          </AnimatePresence>

          <p className="font-poppins text-body-sm-regular md:text-body-xl-regular ">
            Situs web ini membantu pengguna mengenali kue tradisional Indonesia
            menggunakan AI dan menyarankan usaha kecil (UMKM) yang menjualnya.
          </p>

          <div className="hero-button flex  flex-col align-items gap-4 md:flex-row sm:flex-row ">
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
              link={"/Cari-UMKM"}
            />
          </div>
        </div>
      </div>

      <div className="hero-image order-first col-span-4 col-start-1 lg:order-none lg:col-span-6 lg:col-start-8 lg:m-auto">
        <img
          className="w-full h-full bg-cover object-cover rounded-2xl md:h-auto md:m-auto shadow-xl"
          src="/assets/images/cover1.jpg"
          alt="Kue Klepon"
        />
      </div>
    </section>
  );
};

export default HeroSection;
