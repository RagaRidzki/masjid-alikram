import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../../assets/images/hero.svg";

const Hero = () => {
  return (
    <div className="mb-20 font-vietnam max-w-7xl mx-auto px-6 pt-8 gap-10 flex flex-row items-end justify-between text-left ">
      {/* Teks */}
      <motion.div
        className="text-text"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h4 className="mb-6 text-lg sm:text-xl xl:text-2xl font-medium text-muted">
          Masjid Besar SMK Wikrama Bogor
        </h4>
        <h1 className="mb-8 text-4xl sm:text-5xl xl:text-6xl font-semibold leading-snug xl:leading-[4.5rem] whitespace-nowrap">
          Mari <span className="text-primary">Tingkatkan</span> <br />
          <span className="text-primary">Keimanan</span> Masyarakat <br />
          SMK Wikrama Bogor.
        </h1>
        <button className="px-6 py-4 bg-primary text-white rounded-md tracking-wide shadow-md hover-gradient">
          <a href="https://www.instagram.com/alikramwikrama/" target="_blank">
            Beri Bantuan Shodaqoh
          </a>
        </button>
      </motion.div>

      {/* Gambar */}
      <motion.div
        className="hidden lg:flex items-center h-full"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={HeroImage}
          alt="Hero"
          className="h-auto lg:max-w-[450px] xl:max-w-[500px]"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
