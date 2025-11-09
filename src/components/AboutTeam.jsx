import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function AboutTeam() {
  return (
    <section
      id="team"
      className="relative min-h-screen bg-gradient-to-br from-[#FFF8EE] via-[#FFEFE2] to-[#FFE3C9] 
                 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a]
                 px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-28 overflow-hidden"
    >
      {/* 📝 Tilted Paper Card (auto adjusts position on mobile) */}
      <motion.div
        initial={{ rotate: -6, opacity: 0, y: 40 }}
        whileInView={{ rotate: -6, opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-10 sm:top-16 md:top-28 left-1 sm:left-6 md:left-10 
                   bg-[#FFF8E5] w-[85%] sm:w-[330px] md:w-[400px] p-5 sm:p-6 
                   shadow-[0_8px_30px_rgba(0,0,0,0.15)] 
                   border border-[#F59E0B]/40 rounded-md origin-top-left z-10"
        style={{
          transform: "rotate(-6deg)",
          backgroundImage:
            "radial-gradient(circle at top left, #FFFDF5 0%, #FFF4D9 100%)",
        }}
      >
        <div className="text-[#1E293B] font-serif text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
          Some craft films. Some build brands. Some curate art.  
          We bring it all together — a collective of storytellers driven by one belief:  
          <span className="font-semibold text-[#EA580C] dark:text-[#FACC15]">
            every project deserves to be more than just a message; it should become a masterpiece.
          </span>
          <br /><br />
          From first spark to final frame, from raw ideas to timeless visuals –  
          we shape stories that stay with you.
        </div>

        {/* 📎 Paper Clip Accent */}
        <div className="absolute -top-3 right-6 w-6 h-8 border-l-4 border-gray-500 rounded-full rotate-12 opacity-60"></div>
      </motion.div>

      {/* 🏛️ India Gate (Left Bottom Illustration - Responsive) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-4 sm:bottom-8 left-6 sm:left-10 opacity-95"
      >
        <svg
          width="100" // smaller for mobile
          height="100"
          viewBox="0 0 180 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px]"
        >
          <rect width="180" height="180" rx="10" fill="none" />
          <path
            d="M90 30C75 30 68 38 68 53H112C112 38 105 30 90 30ZM60 53H120V150H105V120H75V150H60V53Z"
            fill="#F97316"
            opacity="0.9"
          />
        </svg>
        <p className="text-xs sm:text-sm md:text-base text-[#E85D04] mt-1 font-semibold tracking-wide text-center">
          Shubhanshu Omer
        </p>
      </motion.div>

      {/* 👥 Team Silhouettes Section (responsive alignment) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          relative flex flex-wrap justify-center md:justify-end
          gap-4 sm:gap-6 md:gap-10
          mt-56 sm:mt-40 md:mt-28 
          px-2 sm:px-6 md:px-16 lg:pr-28
        "
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -5 }}
            className="
              w-[65px] sm:w-[80px] md:w-[100px] lg:w-[110px]
              h-[130px] sm:h-[160px] md:h-[210px] lg:h-[230px]
              bg-[#1E293B] dark:bg-[#CBD5F7]
              rounded-[40%]
              shadow-[0_10px_25px_rgba(0,0,0,0.3)]
              transition-all duration-500 cursor-pointer
            "
          ></motion.div>
        ))}
      </motion.div>

      {/* 🎯 Role Labels */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center mt-10 sm:mt-16 md:mt-20 space-y-3 text-[#1E293B] dark:text-gray-100 font-serif italic"
      >
        <p className="text-sm sm:text-lg md:text-xl font-medium tracking-wide px-2">
          <span className="text-[#F97316] font-semibold">🎬 Film Makers</span> •{" "}
          <span className="text-[#EA580C] font-semibold">🧠 Branding Experts</span> •{" "}
          <span className="text-[#FB923C] font-semibold">🎨 Art Curators</span>
        </p>
      </motion.div>

      {/* ✨ Tagline */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#1E293B] dark:text-gray-100 font-serif mt-10 sm:mt-12 md:mt-14"
      >
        Take a closer look at the stories we bring to life.
      </motion.h3>

      {/* 🔘 View Portfolio Button */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex justify-center mt-8 sm:mt-10 md:mt-14 lg:mt-16 mb-12 sm:mb-16 md:mb-24"
      >
        <button
          className="bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#FB923C] hover:to-[#F97316] 
                     text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold 
                     shadow-[0_8px_25px_rgba(249,115,22,0.4)] 
                     flex items-center gap-2 transition-all duration-300"
        >
          View Portfolio
          <FaArrowRight />
        </button>
      </motion.div>

      {/* 🌈 Ambient Blobs (position adjusted for responsiveness) */}
      <div className="absolute top-[15%] right-[5%] sm:top-[20%] sm:right-[10%] w-52 sm:w-64 md:w-72 h-52 sm:h-64 md:h-72 bg-[#FDE68A]/40 dark:bg-indigo-500/20 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute bottom-[8%] left-[10%] sm:bottom-[10%] sm:left-[20%] w-52 sm:w-64 md:w-72 h-52 sm:h-64 md:h-72 bg-[#FDBA74]/40 dark:bg-purple-500/30 blur-[120px] rounded-full animate-pulse" />
    </section>
  );
}
