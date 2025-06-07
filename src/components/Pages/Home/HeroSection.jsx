import Button from "../../Button";
import { motion, AnimatePresence } from "framer-motion";
const HeroSection = () => {
  return (
    <section className="hero grid min-h-[calc(100vh-64px)] gap-10 my-8 lg:gap-0 md:px-36 lg:my-0 lg:mt-16 lg:min-h-[calc(100vh-64px)] grid-cols-4 px-6 lg:grid-cols-12 ">
      <div className="hero-container h-fit lg:min-h-[calc(100vh-64px)] col-span-4 grid lg:col-span-6 ">
        <AnimatePresence>
          <div className="hero-content h-fit lg:min-h-[calc(100vh-64px)] font-baloo flex flex-col gap-6 text-primary-100 lg:justify-center lg:gap-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="hero-title text-heading-2 md:text-6xl "
            >
              Kenali Kue Tradisional Indonesia Hanya Dengan Satu Foto
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="font-poppins text-body-sm-regular md:text-body-xl-regular "
            >
              Situs web ini membantu pengguna mengenali kue tradisional
              Indonesia menggunakan AI dan menyarankan usaha kecil (UMKM) yang
              menjualnya.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="hero-button flex  flex-col align-items gap-4 md:flex-row sm:flex-row "
            >
              <Button
                text="Mulai Deteksi"
                className="bg-primary-100 text-white border  w-full sm:w-auto"
                icon="/assets/icons/camera.svg"
                link={"/Deteksi-Kue"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
              <Button
                text="Cari UMKM"
                className="bg-white text-primary-100 border border-primary-100 w-full sm:w-auto"
                icon="/assets/icons/market.svg"
                link={"/Cari-UMKM"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </motion.div>
          </div>
        </AnimatePresence>
      </div>

      <div className="hero-image order-first col-span-4 col-start-1 lg:order-none lg:col-span-6 lg:col-start-8 lg:m-auto">
        <img
          className="w-full h-full bg-cover object-cover rounded-2xl md:h-auto md:m-auto shadow-xl card-float "
          src="/assets/images/cover1.jpg"
          alt="Kue Klepon"
        />
      </div>
    </section>
  );
};

export default HeroSection;
