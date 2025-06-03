import React from "react";
import { motion } from "framer-motion";

const BenefitCard = ({ icon, bgIcon, title, description, index = 0 }) => {
  return (
    <motion.div
      className="relative p-6 w-full h-auto bg-white border border-gray-200 shadow-lg shadow-black/5 rounded-xl overflow-hidden space-y-4 hover-scale"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
    >
      <div className="mb-4 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1F398426]">
        <img
          src={icon}
          alt=""
          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
        />
      </div>
      <h1 className="text-2xl md:text-3xl font-bold whitespace-pre-line">
        {title}
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-desc font-normal leading-relaxed whitespace-pre-line">
        {description}
      </p>
      <div className="absolute bottom-0 right-0">
        <img
          src={bgIcon}
          alt="Heart Background"
          className="w-40 md:w-52 opacity-5"
        />
      </div>
    </motion.div>
  );
};

export default BenefitCard;
