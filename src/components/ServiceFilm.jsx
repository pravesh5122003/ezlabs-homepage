import React from "react";
import { motion } from "framer-motion";
import { FaCamera, FaVideo, FaFilm, FaPhotoVideo } from "react-icons/fa";
import filmImg from "../assets/services/film.png";

export default function FilmProduction() {
  return (
    <section
      id="film-production"
      className="relative min-h-screen flex flex-col justify-center items-center
                 bg-gradient-to-b from-[#fffaf5] via-[#fff6eb] to-white 
                 dark:from-[#0F0F0F] dark:via-[#1A1A1A] dark:to-[#000000]
                 overflow-hidden px-6 py-16 md:px-12 md:py-24
                 transition-colors duration-700"
    >
      {/* ✨ Soft Cinematic Lighting */}
      <motion.div
        className="absolute -top-20 -left-10 w-80 h-80 bg-[#F97316]/25 dark:bg-[#F59E0B]/15 rounded-full blur-[120px]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-0 w-96 h-96 bg-[#FACC15]/30 dark:bg-[#F59E0B]/20 rounded-full blur-[100px]"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🎞️ Header Quote */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 leading-relaxed 
                     bg-gradient-to-r from-[#F97316] via-[#F59E0B] to-[#FACC15] 
                     bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(249,115,22,0.3)]">
        “Filmmaking is a chance to live many lifetimes.” – <span className="font-bold">Robert Altman</span>
      </h2>

      {/* 🖼️ Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-6xl mx-auto z-10">
        {/* 🎥 Image Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 dark:bg-[#0E0E0E]/80 backdrop-blur-xl 
                     border border-[#F59E0B]/20 rounded-2xl 
                     shadow-[0_8px_40px_rgba(249,115,22,0.25)]
                     hover:shadow-[0_10px_45px_rgba(249,115,22,0.35)]
                     transition-all duration-500 w-[90%] sm:w-[360px] md:w-[380px] p-4"
        >
          <img
            src={filmImg}
            alt="Film Production"
            className="rounded-xl object-cover w-full h-[260px] sm:h-[300px]
                       shadow-[0_8px_30px_rgba(249,115,22,0.15)]"
          />
          <p className="text-center font-semibold text-lg mt-4 
                        bg-gradient-to-r from-[#F97316] to-[#FACC15] 
                        bg-clip-text text-transparent">
            Film Production
          </p>
        </motion.div>

        {/* 🧾 Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed"
        >
          <p className="mb-4">
            We bring stories to life through the art of film. Each frame, light,
            and sound is crafted with purpose — transforming emotion into
            unforgettable visual journeys. Our lens captures the soul of every
            moment.
          </p>

          <p className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
            We craft:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Documentaries & Cinematic Narratives</li>
            <li>Corporate and Promotional Films</li>
            <li>2D Motion Graphics & Explainers</li>
            <li>3D Animation & Visual Storytelling</li>
          </ul>

          {/* 🔸 Original Explore Button (Color Updated Only) */}
          <div className="mt-6 flex items-center gap-3">
            <span className="text-[#F59E0B] font-semibold cursor-pointer hover:underline">
              Explore Now
            </span>
            <motion.span
              initial={{ x: 0 }}
              animate={{ x: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.3,
                ease: "easeInOut",
              }}
              className="text-[#F97316] text-2xl font-bold"
            >
              ➜
            </motion.span>
          </div>
        </motion.div>
      </div>

      {/* 🎥 Floating Background Camera Image */}
      <motion.img
        src="https://cdn.pixabay.com/photo/2016/11/29/09/15/camera-1868514_1280.jpg"
        alt="Camera Background"
        className="absolute w-[420px] md:w-[600px] opacity-[0.08] dark:opacity-[0.1] top-[25%] left-[10%]
                   rounded-2xl blur-[2px] object-cover select-none pointer-events-none"
        animate={{ y: [0, -15, 0, 15, 0], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🎞️ Floating Cinematic Icons */}
      {/* Camera */}
      <motion.div
        className="absolute text-[#F97316]/40 dark:text-[#F59E0B]/50 
                   top-[12vh] left-[10vw]"
        animate={{ y: [0, -6, 0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 9 }}
      >
        <FaCamera size={90} className="sm:size-[90px] md:size-[115px]" />
      </motion.div>

      {/* Video Camera */}
      <motion.div
        className="absolute text-[#F97316]/40 dark:text-[#F59E0B]/50 
                   top-[45vh] right-[12vw]"
        animate={{ y: [0, 5, 0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      >
        <FaVideo size={90} className="sm:size-[90px] md:size-[113px]" />
      </motion.div>

      {/* Film Reel */}
      <motion.div
        className="absolute text-[#F97316]/40 dark:text-[#F59E0B]/50 
                   bottom-[8vh] right-[10vw]"
        animate={{ rotate: [0, 3, -3, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      >
        <FaFilm size={90} className="sm:size-[90px] md:size-[115px]" />
      </motion.div>

      {/* Photo/Video Icon */}
      <motion.div
        className="absolute text-[#F97316]/40 dark:text-[#F59E0B]/50 
                   bottom-[5vh] left-[10vw]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
      >
        <FaPhotoVideo size={90} className="sm:size-[90px] md:size-[115px]" />
      </motion.div>
    </section>
  );
}
