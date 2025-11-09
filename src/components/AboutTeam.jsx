import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function AboutTeam() {
  return (
    <section
      id="team"
      className="relative min-h-screen bg-gradient-to-br 
                 from-[#FFF9F3] via-[#FFF2E2] to-[#FFE6C8]
                 dark:from-[#0F0F0F] dark:via-[#1A1A1A] dark:to-[#000000]
                 px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-28 overflow-hidden transition-all duration-700"
    >
      {/* 📝 Tilted Paper Card */}
      <motion.div
        initial={{ rotate: -6, opacity: 0, y: 40 }}
        whileInView={{ rotate: -6, opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-10 sm:top-16 md:top-28 left-1 sm:left-6 md:left-10 
                   bg-white/90 dark:bg-[#111]/90 backdrop-blur-lg
                   w-[85%] sm:w-[330px] md:w-[400px] p-5 sm:p-6 
                   shadow-[0_8px_30px_rgba(249,115,22,0.25)] 
                   border border-[#F59E0B]/40 rounded-md origin-top-left z-10"
        style={{
          transform: "rotate(-6deg)",
          backgroundImage:
            "radial-gradient(circle at top left, #FFFDF5 0%, #FFF2D9 100%)",
        }}
      >
        <div className="text-gray-800 dark:text-gray-200 font-serif text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
          We’re a collective of creators, dreamers, and visual storytellers.  
          Every frame we build carries emotion, passion, and precision —  
          a reflection of our craft.  
          <br />
          <br />
          <span className="font-semibold text-[#F97316] dark:text-[#FACC15]">
            At EZFilm, creativity meets purpose — and every project becomes
            a timeless visual experience.
          </span>
        </div>

        {/* 📎 Paper Clip Accent */}
        <div className="absolute -top-3 right-6 w-6 h-8 border-l-4 border-gray-500 rounded-full rotate-12 opacity-60"></div>
      </motion.div>

      {/* 🏛️ India Gate Illustration */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-4 sm:bottom-8 left-6 sm:left-10 opacity-95"
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 180 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px]"
        >
          <path
            d="M90 30C75 30 68 38 68 53H112C112 38 105 30 90 30ZM60 53H120V150H105V120H75V150H60V53Z"
            fill="#F97316"
            opacity="0.9"
          />
        </svg>
        <p className="text-xs sm:text-sm md:text-base text-[#F97316] mt-1 font-semibold tracking-wide text-center">
          Shubhanshu Omer
        </p>
      </motion.div>

      {/* 👥 Team Silhouettes */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 md:gap-10 mt-56 sm:mt-40 md:mt-28 px-2 sm:px-6 md:px-16 lg:pr-28"
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.08,
              y: -8,
              boxShadow: "0 10px 30px rgba(249,115,22,0.4)",
            }}
            transition={{ duration: 0.4 }}
            className="w-[65px] sm:w-[80px] md:w-[100px] lg:w-[110px]
                       h-[130px] sm:h-[160px] md:h-[210px] lg:h-[230px]
                       bg-gradient-to-b from-[#F97316] to-[#F59E0B] 
                       dark:from-[#F59E0B] dark:to-[#FACC15]
                       rounded-[40%] opacity-90
                       shadow-[0_10px_25px_rgba(249,115,22,0.35)]
                       transition-all duration-500 cursor-pointer"
          ></motion.div>
        ))}
      </motion.div>

      {/* 🎯 Role Labels */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-center mt-10 sm:mt-16 md:mt-20 space-y-3 font-serif italic"
      >
        <p className="text-sm sm:text-lg md:text-xl font-medium tracking-wide text-gray-800 dark:text-gray-100 px-2">
          <span className="text-[#F97316] font-semibold">🎬 Filmmakers</span> •{" "}
          <span className="text-[#EA580C] font-semibold">🧠 Branding Artists</span> •{" "}
          <span className="text-[#F59E0B] font-semibold">🎨 Art Curators</span>
        </p>
      </motion.div>

      {/* ✨ Tagline */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mt-10 sm:mt-12 md:mt-14 
                   bg-gradient-to-r from-[#F97316] via-[#F59E0B] to-[#FACC15]
                   bg-clip-text text-transparent font-serif drop-shadow-[0_2px_15px_rgba(249,115,22,0.3)]"
      >
        Together, we turn imagination into timeless visuals.
      </motion.h3>

      {/* 🔘 View Portfolio Button */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex justify-center mt-8 sm:mt-10 md:mt-14 lg:mt-16 mb-12 sm:mb-16 md:mb-24"
      >
        <button
          className="bg-gradient-to-r from-[#F97316] via-[#F59E0B] to-[#FACC15]
                     hover:from-[#FB923C] hover:to-[#F97316]
                     text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold 
                     shadow-[0_8px_25px_rgba(249,115,22,0.45)] 
                     flex items-center gap-2 transition-all duration-300"
        >
          View Portfolio <FaArrowRight />
        </button>
      </motion.div>

      {/* 🌈 Ambient Floating Lights */}
      <motion.div
        className="absolute top-[10%] right-[15%] w-64 h-64 bg-[#F59E0B]/20 dark:bg-[#F97316]/20 blur-[110px] rounded-full"
        animate={{ y: [0, -10, 0, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[12%] left-[15%] w-64 h-64 bg-[#FACC15]/25 dark:bg-[#F59E0B]/15 blur-[120px] rounded-full"
        animate={{ y: [0, 8, 0, -8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
