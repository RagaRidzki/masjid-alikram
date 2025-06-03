import React from "react";
import { motion } from "framer-motion";

import BenefitCard from "../common/BenefitCard";
import SectionHeader from "../common/SectionHeader";

import BenefitImage from "../../assets/images/benefit.svg";

import HeartIcon from "../../assets/icons/heart-icon.svg";
import TrustIcon from "../../assets/icons/trust-icon.svg";
import ShieldIcon from "../../assets/icons/shield-icon.svg";
import StarIcon from "../../assets/icons/star-icon.svg";

import HeartBg from "../../assets/icons/heart-bg.svg";
import TrustBg from "../../assets/icons/trust-bg.svg";
import ShieldBg from "../../assets/icons/shield-bg.svg";
import StarBg from "../../assets/icons/star-bg.svg";

const Benefit = () => {
  return (
    <div className="mb-26 font-vietnam max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        highlight={"Manfaat"}
        rest={"Wakaf, infaq \n shodaqoh."}
        description={
          "Berikut adalah beberapa keutamaan wakaq, infaq \n shodaqoh yang akan anda dapatkan."
        }
      />

      {/* Flex Container */}
      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        {/* Kartu-kartu Benefit */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <BenefitCard
            icon={HeartIcon}
            title={"Menjadikan Hati \n Lebih Tenang"}
            description={
              "Kami memudahkan Anda bersedekah untuk masjid, agar hati lebih tenang dan penuh keberkahan."
            }
            bgIcon={HeartBg}
            index={0}
          />

          <BenefitCard
            icon={TrustIcon}
            title={"Terbukanya \n Pintu Rezeki"}
            description={
              "Allah SWT akan membuka pintu rezeki dari arah yang tidak dikira sebelumnya."
            }
            bgIcon={TrustBg}
            index={1}
          />

          <BenefitCard
            icon={ShieldIcon}
            title={"Menjauhkan dari \n Bahaya"}
            description={`Rasulullah SAW pernah bersabda: "Bersegeralah untuk bersedekah, karena musibah dan bencana tidak bisa mendahului sedekah."`}
            bgIcon={ShieldBg}
            index={2}
          />

          <BenefitCard
            icon={StarIcon}
            title={"Pahala yang tak \n terputus"}
            description={
              "Ini akan menolong kita di akhirat nantinya, juga dapat menyelamatkannya dari api neraka."
            }
            bgIcon={StarBg}
            index={3}
          />
        </div>

        {/* Gambar hanya tampil di desktop ke atas */}
        <motion.div
          className="hidden lg:flex w-1/4 items-center hover-scale"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={BenefitImage}
            alt="Ilustrasi manfaat wakaf dan infaq"
            className="w-full h-auto object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Benefit;
