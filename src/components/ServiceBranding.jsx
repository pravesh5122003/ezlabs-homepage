import React from "react";
import { motion } from "framer-motion";
import brandingImg from "../assets/services/Branding.png";

export default function Branding() {
  return (
    <section
      id="branding"
      className="relative min-h-screen flex flex-col justify-center items-center 
                 bg-gradient-to-b from-[#fffaf5] via-[#fff6eb] to-white 
                 dark:from-[#0F0F0F] dark:via-[#1A1A1A] dark:to-[#000000] 
                 overflow-hidden px-6 py-16 md:px-12 md:py-24 
                 transition-colors duration-700"
    >
      {/* ✨ Soft Cinematic Glows */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-[#F97316]/20 dark:bg-[#F59E0B]/10 rounded-full blur-[120px]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-0 w-80 h-80 bg-[#FACC15]/30 dark:bg-[#F59E0B]/20 rounded-full blur-[100px]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🎥 Floating Real Camera Image */}
      <motion.img
        src="https://cdn.pixabay.com/photo/2016/11/29/09/15/camera-1868514_1280.jpg"
        alt="Background Camera"
        className="absolute w-[400px] md:w-[550px] opacity-[0.07] dark:opacity-[0.1] top-[20%] left-[10%] 
                   rounded-2xl blur-[2px] object-cover select-none pointer-events-none"
        animate={{ y: [0, -15, 0, 15, 0], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🧠 Header Quote */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 leading-relaxed 
                     bg-gradient-to-r from-[#F97316] via-[#F59E0B] to-[#FACC15] 
                     bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(249,115,22,0.3)]">
        “A brand is a voice, and a product is a souvenir.” – <span className="font-bold">Lisa Gansky</span>
      </h2>

      {/* 🖼️ Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-6xl mx-auto z-10">
        {/* Image Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 dark:bg-[#0E0E0E]/80 backdrop-blur-xl 
                     border border-[#F59E0B]/20 rounded-2xl shadow-[0_8px_40px_rgba(249,115,22,0.25)] 
                     hover:shadow-[0_10px_45px_rgba(249,115,22,0.35)] transition-all duration-500 
                     w-[90%] sm:w-[360px] md:w-[380px] p-4"
        >
          <img
            src={brandingImg}
            alt="Branding"
            className="rounded-xl object-cover w-full h-[260px] sm:h-[300px] 
                       shadow-[0_8px_30px_rgba(249,115,22,0.15)]"
          />
          <p className="text-center font-semibold text-lg mt-4 
                        bg-gradient-to-r from-[#F97316] to-[#FACC15] 
                        bg-clip-text text-transparent">
            Branding
          </p>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed"
        >
          <p className="mb-4">
            Branding is storytelling in motion — it defines how your audience sees and feels your work.
            At <strong className="text-[#F59E0B]">EZFilm</strong>, we bring your vision to life with cinematic flair,
            emotional connection, and a visual presence that lasts.
          </p>

          <p className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
            We specialize in:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Creative Branding & Visual Communication</li>
            <li>Market and Identity Mapping</li>
            <li>Content Direction & Management</li>
            <li>Social Media Visual Experience</li>
            <li>Rebranding for Modern Impact</li>
          </ul>

          {/* 🔸 Original Explore Button (Color Updated Only) */}
          <div className="mt-6 flex items-center gap-3">
            <span className="text-[#F59E0B] font-semibold cursor-pointer hover:underline">
              Explore Now
            </span>
            <span className="text-[#F97316] text-2xl font-bold">➜</span>
          </div>
        </motion.div>
      </div>

      {/* 🎨 Floating Icons (Replaced with camera + palette + laptop) */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
        alt="Camera Icon"
        className="absolute w-14 md:w-20 opacity-15 top-[12%] right-[15%]"
        animate={{ y: [0, -8, 0, 8, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/742/742751.png"
        alt="Laptop Icon"
        className="absolute w-16 md:w-24 opacity-10 bottom-[8%] left-[10%]"
        animate={{ y: [0, 8, 0, -8, 0], x: [0, 5, 0, -5, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/2584/2584720.png"
        alt="Art Palette Icon"
        className="absolute w-14 md:w-18 opacity-10 top-[60%] left-[80%]"
        animate={{ y: [0, -10, 0, 10, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
}
