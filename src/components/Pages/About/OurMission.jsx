import DescriptionCard from "../../DescriptionCard.jsx";
import { motion, AnimatePresence } from "framer-motion";

const OurMission = () => {
  return (
    <section className="our-mission gap-4 flex flex-col bg-primary-100 px-6 sm:px-8 md:px-12 lg:px-24 py-8 sm:py-10 md:py-14 lg:py-24">
      <AnimatePresence>
        <div className="mission-content text-white pb-4 sm:pb-5 md:pb-6 lg:pb-7">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="about-title font-baloo text-heading-5 sm:text-heading-4 md:text-heading-3 lg:text-heading-1 text-center pb-4 sm:pb-5 md:pb-6 lg:pb-7"
          >
            Misi Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="font-poppins text-body-md-regular lg:text-body-lg-regular text-center"
          >
            Kami bertujuan untuk menjembatani teknologi dan tradisi dengan
            menciptakan platform yang mudah diakses untuk membantu melestarikan
            warisan kuliner Indonesia sekaligus mendukung UMKM.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 items-start"
        >
          <DescriptionCard
            icon="/assets/icons/love.svg"
            title="Melestarikan Budaya"
            desc="Dokumentasi dan berbagi pengetahuan tentang kue-kue tradisional Indonesia untuk generasi mendatang"
            className={"text-white "}
          />
          <DescriptionCard
            icon="/assets/icons/together.svg"
            title="Memberdayakan UMKM"
            desc="Mendukung UMKM dengan menghubungkan mereka, dengan pelanggan melalui teknologi"
            className={"text-white"}
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default OurMission;
