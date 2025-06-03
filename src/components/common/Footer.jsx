import React from "react";
import { motion } from "framer-motion";

import Logo from "../../assets/images/logo.svg";
import Facebook from "../../assets/icons/facebook-icon.svg";
import Twitter from "../../assets/icons/twitter-icon.svg";
import Instagram from "../../assets/icons/instagram-icon.svg";
import Youtube from "../../assets/icons/youtube-icon.svg";

const Footer = () => {
  return (
    <>
      <motion.footer
        className="font-vietnam bg-[#001E42] text-white px-4 md:px-16 pt-10 pb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-8 pb-20">
          {/* KIRI */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="SMK Wikrama Logo" className="w-14 h-14" />
              <h4 className="text-sm font-semibold leading-tight tracking-wider">
                SMK WIKRAMA <br /> BOGOR
              </h4>
            </div>
            <div>
              <p className="font-bold text-sm mb-1">Alamat</p>
              <p className="text-sm font-light leading-relaxed tracking-wider">
                Jl. Raya Wangun
                <br />
                Kelurahan Sindangsari
                <br />
                Bogor Timur 16720
              </p>
            </div>
            <hr className="w-60 opacity-50" />

            <div>
              <p className="font-bold text-sm mb-1">Telepon</p>
              <p className="text-sm font-light leading-relaxed tracking-wider">
                0251-8242411 /<br />
                082221718035 (Whatsapp)
              </p>
            </div>
            <hr className="w-60 opacity-50" />

            <div className="flex space-x-4 pt-2">
              <a href="#">
                <img src={Facebook} alt="fb" className="w-5 h-5" />
              </a>
              <a href="#">
                <img src={Twitter} alt="tw" className="w-5 h-5" />
              </a>
              <a href="#">
                <img src={Instagram} alt="ig" className="w-5 h-5" />
              </a>
              <a href="#">
                <img src={Youtube} alt="yt" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* TENGAH */}
          <div className="text-sm">
            <h3 className="font-bold mb-4">Tentang Wikrama</h3>
            <ul className="space-y-4">
              <li className="list-disc ml-4 font-light">Sejarah</li>
              <li className="list-disc ml-4 font-light">Peraturan Sekolah</li>
              <li className="list-disc ml-4 font-light">
                Rencana Strategi & Prestasi
              </li>
              <li className="list-disc ml-4 font-light">Yayasan</li>
              <li className="list-disc ml-4 font-light">Struktur Organisasi</li>
              <li className="list-disc ml-4 font-light">Cabang</li>
              <li className="list-disc ml-4 font-light">Penghargaan</li>
              <li className="list-disc ml-4 font-light">Kerjasama</li>
            </ul>
          </div>

          {/* KANAN */}
          <div>
            <h3 className="font-bold text-sm mb-4">Kirim Pesan</h3>
            <form className="flex flex-col space-y-3">
              <input
                type="text"
                placeholder="Nama"
                className="text-sm px-3 py-2 rounded w-full bg-white text-black focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="text-sm px-3 py-2 rounded w-full bg-white text-black focus:outline-none"
              />
              <textarea
                placeholder="Pesan Anda"
                className="text-sm px-3 py-2 rounded w-full h-32 bg-white text-black focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-[#FFF500] text-primary font-medium py-3 px-6 rounded-lg w-fit self-end text-sm hover:bg-yellow-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </motion.footer>
      <div className="font-vietnam bg-white text-center text-primary text-md font-medium py-4">
        Copyright © 2025 - Raga Ridzki Panuntun. All Right Reserved.
      </div>
    </>
  );
};

export default Footer;
