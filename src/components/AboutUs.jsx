import React from "react";
import { motion } from "framer-motion";
import { FaMountainSun } from "react-icons/fa6";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br 
                 from-[#FFF8F1] via-[#FFF3E0] to-[#FFE8CC]
                 dark:from-[#0F0F0F] dark:via-[#1A1A1A] dark:to-[#000000]
                 px-6 md:px-16 lg:px-24 py-20 md:py-28 overflow-hidden transition-colors duration-700"
    >
      {/* ✨ Background Glows */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-[#F97316]/20 dark:bg-[#F59E0B]/15 rounded-full blur-[100px]"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-[#FACC15]/25 dark:bg-[#F97316]/15 rounded-full blur-[120px]"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* 🎬 Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2
          className="text-3xl md:text-4xl font-serif font-semibold mb-4 
                     bg-gradient-to-r from-[#F97316] via-[#F59E0B] to-[#FACC15]
                     bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(249,115,22,0.3)]"
        >
          A <span className="font-bold">canvas</span> of stories and creators.
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
          From heartfelt documentaries to bold branding campaigns — every project begins with a
          spark. At <span className="text-[#F59E0B] font-semibold">EZFilm</span>, we don’t just
          capture moments; we design emotions that linger and stories that connect.
        </p>
      </motion.div>

      {/* 🎞️ Poetic Quote */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-[75%] ml-auto text-right mb-16"
      >
        <p
          className="italic text-xl md:text-2xl text-gray-800 dark:text-[#FBBF24] leading-relaxed font-light"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          “Every project is a new canvas — a fusion of vision, trust, and storytelling. Together,
          we’ve created frames that move hearts and echo through time.”
        </p>
      </motion.div>

      {/* 🎥 Stats Cards */}
      <div className="relative flex flex-row justify-center items-center gap-0 mt-16 mb-24 overflow-x-visible">
        {[
          { number: "120+", label: "Projects", rotate: "-6deg", z: "z-30", delay: 0 },
          { number: "80+", label: "Happy Clients", rotate: "-2deg", z: "z-20", delay: 0.15 },
          { number: "15+", label: "Creative Experts", rotate: "3deg", z: "z-10", delay: 0.3 },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: stat.delay }}
            whileHover={{
              rotate: 0,
              scale: 1.07,
              boxShadow: "0 15px 40px rgba(249,115,22,0.35)",
            }}
            className={`relative bg-white/80 dark:bg-[#0E0E0E]/80 backdrop-blur-xl 
                        border border-[#F59E0B]/30 rounded-xl 
                        px-10 py-8 w-[200px] sm:w-[230px] text-center 
                        transform rotate-[${stat.rotate}] ${stat.z} 
                        transition-all duration-500 ease-out cursor-default 
                        hover:-translate-y-2`}
            style={{
              marginLeft: index === 0 ? "0px" : "-50px", // overlap for cinematic depth
            }}
          >
            <h3
              className="text-5xl font-extrabold 
                         bg-gradient-to-r from-[#F97316] to-[#FACC15]
                         bg-clip-text text-transparent"
            >
              {stat.number}
            </h3>
            <p className="text-[#F97316] dark:text-[#FBBF24] text-[16px] font-medium mt-2">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 🎬 Brand Collaborations */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap justify-center items-center gap-10 md:gap-14 text-2xl md:text-3xl font-semibold"
      >
        {[
          { name: "Coca-Cola", color: "#F97316" },
          { name: "Netflix", color: "#E50914" },
          { name: "TED", color: "#EF4444" },
          { name: "Vogue", color: "#F59E0B" },
        ].map((brand, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3 + i }}
            className="italic tracking-wide"
            style={{
              color: brand.color,
              textShadow: "0px 2px 10px rgba(249,115,22,0.25)",
            }}
          >
            {brand.name}
          </motion.span>
        ))}
      </motion.div>

      {/* 🌄 Decorative Mountain Icon */}
      <motion.div
        className="absolute bottom-[40px] right-[70px] text-[#F59E0B]/50 dark:text-[#FBBF24]/30"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      >
        <FaMountainSun size={150} />
      </motion.div>

      {/* 🌈 Gradient Blobs */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[#F97316]/20 dark:bg-[#F59E0B]/15 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[15%] right-[10%] w-64 h-64 bg-[#FACC15]/25 dark:bg-[#F97316]/15 blur-[100px] rounded-full animate-pulse" />
    </section>
  );
}
