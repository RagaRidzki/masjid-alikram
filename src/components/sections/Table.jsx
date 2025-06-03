import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";
import Donations from "../../donations.json";

const Table = () => {
  return (
    <div
      id="table"
      className="mb-26 font-vietnam max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <SectionHeader
        highlight={"Pendataan"}
        rest={"Wakaf, infaq \n shodaqoh."}
        description={
          "Berikut adalah data donatur wakaf, infaq shodaqoh untuk \n masjid besar SMK Wikrama Bogor"
        }
      />
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full text-sm text-left table-fixed">
          <thead className="bg-gray-100 text-gray-500 uppercase font-medium">
            <tr>
              <th className="px-6 py-4">Nama Donatur</th>
              <th className="px-6 py-4">Donatur ID</th>
              <th className="px-6 py-4">Paket</th>
              <th className="px-6 py-4">Kategori</th>
              <th className="px-6 py-4">Nominal/barang</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {Donations.map((donor, index) => (
              <motion.tr
                key={index}
                className="border-t border-gray-200 hover:bg-gray-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <td className="px-6 py-4 whitespace-nowrap">{donor.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{donor.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{donor.package}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {donor.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{donor.amount}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6 10a2 2 0 114 0 2 2 0 01-4 0zm4 0a2 2 0 114 0 2 2 0 01-4 0zm4 0a2 2 0 114 0 2 2 0 01-4 0z" />
                    </svg>
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
