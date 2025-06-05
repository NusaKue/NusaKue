import TechnologyItem from "../../TechnologyItem";

const Technology = () => {
  const technologyItems = [
    {
      icon: "/assets/icons/technology/tensorflow.png",
      name: "TensorFlow",
      desc: "Untuk melatih model yang mampu mengenali gambar kue tradisional.",
    },
    {
      icon: "/assets/icons/technology/googlecolab.png",
      name: "Google Colab",
      desc: "Digunakan sebagai lingkungan pelatihan model berbasis cloud.",
    },
    {
      icon: "/assets/icons/technology/hapi.png",
      name: "Hapi JS",
      desc: "Digunakan untuk membuat REST API tambahan di sisi back-end.",
    },
    {
      icon: "/assets/icons/technology/firebase.png",
      name: "Firebase",
      desc: "Menyimpan dan mengelola data aplikasi secara real-time.",
    },
    {
      icon: "/assets/icons/technology/cloudrun.png",
      name: "Cloud Run",
      desc: "Menjalankan API secara otomatis tanpa perlu server manual.",
    },
    {
      icon: "/assets/icons/technology/cloudstorage.png",
      name: "Cloud Storage",
      desc: "Menyimpan gambar kue yang diunggah pengguna.",
    },
    {
      icon: "/assets/icons/technology/react.png",
      name: "React JS",
      desc: "Membangun antarmuka pengguna yang interaktif.",
    },
    {
      icon: "/assets/icons/technology/tailwind.png",
      name: "Tailwind CSS",
      desc: "Styling cepat dan responsif untuk tampilan web.",
    },
    {
      icon: "/assets/icons/technology/vite.png",
      name: "Vite",
      desc: "Mempercepat proses pengembangan front-end berbasis React.",
    },
    {
      icon: "/assets/icons/technology/figma.png",
      name: "Figma",
      desc: "Digunakan untuk mendesain antarmuka sebelum dikembangkan.",
    },
  ];

  return (
    <section className="technology bg-white px-6 sm:px-8 md:px-12 lg:px-24 py-8 sm:py-10 md:py-14">
      <div className="technology-content text-primary-100">
        <h2
          className="technology-title font-baloo text-center text-heading-5 sm:text-heading-4 md:text-heading-3 lg:text-heading-2 mb-4 sm:mb-6 md:mb-8 lg:mb-10"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-duration="1000"
        >
          Teknologi yang Kami Gunakan
        </h2>
      </div>
      <div className="techonolgy-content grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-5">
        {technologyItems.map((item) => (
          <TechnologyItem
            className="col-span-3"
            icon={item.icon}
            name={item.name}
            desc={item.desc}
            animateType="zoom-in"
            animateOffset="100"
            animateDuration="1000"
          />
        ))}
      </div>
    </section>
  );
};

export default Technology;
