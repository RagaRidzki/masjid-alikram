import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion, useInView } from "framer-motion";

// Ganti dengan gambar banner yang sesuai dengan landing page masjid kamu
import Banner1 from "../../assets/images/banner-1.png";
import Banner2 from "../../assets/images/banner-1.png";
import Banner3 from "../../assets/images/banner-1.png";

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const bannerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const banners = [Banner1, Banner2];

  return (
    <div className="mb-26 max-w-7xl mx-auto px-6" ref={ref}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
      >
        {banners.map((image, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              variants={bannerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-80 md:h-96 rounded-xl overflow-hidden"
            >
              <img
                src={image}
                alt={`Banner ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
