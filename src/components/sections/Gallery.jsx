import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";

import Gallery1 from "../../assets/images/gallery-1.png";
import Gallery2 from "../../assets/images/gallery-2.png";
import Gallery3 from "../../assets/images/gallery-3.png";
import Gallery4 from "../../assets/images/gallery-4.png";
import Gallery5 from "../../assets/images/gallery-5.png";

import Arrow from "../../assets/icons/arrow-icon.svg";

const Gallery = () => {
  return (
    <div
      id="gallery"
      className="mb-26 font-vietnam max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <SectionHeader
        highlight={"Gallery"}
        rest={"Masjid Besar SMK \n Wikrama Bogor."}
        description={"Berikut adalah gallery masjid besar SMK Wikrama Bogor."}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Gambar-gambar */}
        {[Gallery1, Gallery2, Gallery3, Gallery4, Gallery5].map(
          (img, index) => (
            <motion.div
              key={index}
              className="w-full h-auto overflow-hidden rounded-2xl shadow-md hover-scale"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          )
        )}

        {/* Card "Buka Galeri" */}
        <motion.a
          href="https://www.instagram.com/alikramwikrama/"
          target="_blank"
          className="w-full h-auto bg-primary rounded-3xl flex justify-center items-center hover-gradient"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col justify-center items-center space-y-6 py-6">
            <img src={Arrow} alt="Arrow Icon" className="w-10 h-10" />
            <h4 className="text-2xl sm:text-3xl font-semibold text-white text-center">
              Buka Galeri
            </h4>
          </div>
        </motion.a>
      </div>
    </div>
  );
};

export default Gallery;
