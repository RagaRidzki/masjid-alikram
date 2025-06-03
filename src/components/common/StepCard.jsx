import React from "react";
import { motion } from "framer-motion";

const StepCard = ({ number, title, description, index = 0 }) => {
  return (
    <motion.div
      className="p-6 sm:p-8 h-auto bg-white border border-gray-200 shadow-lg shadow-black/5 rounded-xl hover-scale"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
    >
      <div className="space-y-2">
        <h4 className="text-xl sm:text-2xl font-bold text-primary">{number}</h4>
        <h1 className="text-2xl sm:text-3xl font-bold text-text">{title}</h1>
        <p className="text-base sm:text-lg lg:text-xl text-desc font-normal leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default StepCard;
