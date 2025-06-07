import { motion, AnimatePresence } from "framer-motion";
const AboutNusa = () => {
  return (
    <section className="about-nusa px-6 sm:px-8 md:px-12 lg:px-24 md:mt-16 py-8 sm:py-10 md:py-14 lg:py-16">
      <AnimatePresence>
        <div className="about-header text-primary-100">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="about-title font-baloo text-heading-5 sm:text-heading-4 md:text-heading-3 lg:text-heading-1 text-center pb-4 sm:pb-5 md:pb-6 lg:pb-7"
          >
            Tentang Kami
          </motion.h1>
        </div>
        <div className="about-desc">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="font-poppins text-body-md-regular lg:text-body-lg-regular text-center text-primary-100"
          >
            Sebuah proyek kolaborasi yang menyatukan keahlian di bidang
            Front-End, Back-End, dan Machine Learning untuk melestarikan warisan
            kuliner Indonesia melalui teknologi.
          </motion.p>
        </div>
      </AnimatePresence>
    </section>
  );
};

export default AboutNusa;
