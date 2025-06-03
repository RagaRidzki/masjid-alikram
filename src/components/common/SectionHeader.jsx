import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({ highlight, rest, description }) => {
  return (
    <motion.div
      className="mb-8 space-y-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold whitespace-pre-line">
        <span className="text-primary">{highlight}</span> {rest}
      </h1>
      <p className="text-desc text-md sm:text-lg md:text-xl lg:text-2xl whitespace-pre-line">
        {description}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
