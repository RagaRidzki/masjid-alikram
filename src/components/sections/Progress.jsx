import React from "react";
import Donations from "../../donations.json";
import { motion } from "framer-motion";

const Progress = () => {
  return (
    <div className="mb-26 font-vietnam max-w-7xl mx-auto px-6">
      <motion.div
        className="bg-white py-8 px-6 rounded-t-lg shadow-lg border border-gray-200"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mb-6 flex flex-col sm:flex-row sm:justify-between gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            {
              title: "Total Target Dana",
              value: "Rp800.000.000",
            },
            {
              title: "Total Dana Terkumpul",
              value: "Rp500.000.000",
            },
            {
              title: "Total Donatur",
              value: "500+ Orang",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <p className="text-base md:text-lg font-medium text-muted">
                {item.title}
              </p>
              <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold">
                {item.value}
              </h1>
            </motion.div>
          ))}
        </motion.div>

        <hr className="mb-6 text-[#D9D9D9]" />

        {/* Progress bar */}
        <div className="flex items-center gap-6">
          <div className="w-full h-8 bg-gray-200 rounded-md overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-l-md"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 1 }}
            />
          </div>
          <motion.h1
            className="text-2xl md:text-2xl lg:text-3xl font-bold text-blue-900 whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            60,0% <span className="text-sm font-medium">Terpenuhi</span>
          </motion.h1>
        </div>
      </motion.div>

      <div className="flex items-center bg-primary py-8 px-6 h-16 rounded-b-lg shadow-lg border-b border-gray-200">
        <marquee behavior="" direction="">
          <p className="text-white font-medium">
            {Donations.map((item, idx) => (
              <span key={idx}>
                {item.name} -{" "}
                <span className="text-[#FFF500]">
                  {item.category}: Rp{item.amount.toLocaleString("ID-id")}
                </span>
                {idx !== Donations.length - 1 && (
                  <>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</>
                )}
              </span>
            ))}
          </p>
        </marquee>
      </div>
    </div>
  );
};

export default Progress;
