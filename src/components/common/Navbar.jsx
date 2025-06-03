import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.svg";
import { Menu, X } from "lucide-react"; // Icon dari lucide-react

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`font-vietnam sticky top-0 z-50 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "bg-white/30 shadow-md" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <img src={Logo} alt="logo" className="w-[45px] h-[45px]" />
            <h1 className="text-text font-semibold text-sm">
              SMK WIKRAMA <br /> BOGOR
            </h1>
          </a>

          {/* Desktop Menu */}
          <ul className="font-epilogue font-medium hidden md:flex space-x-8 text-sm">
            <li>
              <a href="#">Beranda</a>
            </li>
            <li>
              <a href="#step" className="text-muted">
                Cara Wakaf
              </a>
            </li>
            <li>
              <a href="#table" className="text-muted">
                Data Wakaf
              </a>
            </li>
            <li>
              <a href="#gallery" className="text-muted">
                Gallery
              </a>
            </li>
            <li>
              <a href="https://smkwikrama.sch.id/" target="_blank" className="text-muted">
                Web Wikrama
              </a>
            </li>
          </ul>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-text"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full px-4 pb-4 pt-4 backdrop-blur-xl bg-white/60 shadow-md md:hidden z-40 transition-all duration-300">
            <ul className="space-y-3 text-sm font-epilogue font-medium">
              <li>
                <a href="#" className="block">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="block text-muted">
                  Cara Wakaf
                </a>
              </li>
              <li>
                <a href="#" className="block text-muted">
                  Data Wakaf
                </a>
              </li>
              <li>
                <a href="#" className="block text-muted">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="block text-muted">
                  Web Wikrama
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};
