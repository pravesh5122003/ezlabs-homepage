import React from "react";
import { motion } from "framer-motion";
import {
  FaPhotoVideo,
  FaTheaterMasks,
  FaRegSmile,
  FaRegImages,
} from "react-icons/fa";
import artImg from "../assets/services/art.png";

export default function ArtCuration() {
  return (
    <section
      id="art-curation"
      className="relative min-h-screen flex flex-col justify-center items-center
                 bg-gradient-to-b from-[#fffaf5] via-[#fff6eb] to-white
                 dark:from-[#0F0F0F] dark:via-[#1A1A1A] dark:to-[#000000]
                 overflow-hidden px-6 py-16 md:px-12 md:py-24
                 transition-colors duration-700"
    >
      {/* ✨ Soft Background Glows */}
      <motion.div
        className="absolute -top-20 -left-10 w-80 h-80 bg-[#F59E0B]/25 dark:bg-[#F97316]/15 rounded-full blur-[120px]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-0 w-96 h-96 bg-[#FACC15]/25 dark:bg-[#F59E0B]/15 rounded-full blur-[100px]"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🖋 Header */}
      <h2
        className="text-2xl md:text-3xl font-semibold text-center mb-12 leading-relaxed
                   bg-gradient-to-r from-[#F97316] via-[#F59E0B] to-[#FACC15]
                   bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(249,115,22,0.3)]"
      >
        “We take art where it belongs — to the people.” –{" "}
        <span className="font-bold">Vernita Verma</span>
      </h2>

      {/* 🖼️ Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-6xl mx-auto z-10">
        {/* Image Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          className="bg-white/80 dark:bg-[#0E0E0E]/80 backdrop-blur-xl
                     border border-[#F59E0B]/20 rounded-2xl
                     shadow-[0_8px_40px_rgba(249,115,22,0.25)]
                     hover:shadow-[0_10px_45px_rgba(249,115,22,0.35)]
                     transition-all duration-500 w-[90%] sm:w-[360px] md:w-[380px] p-4"
        >
          <img
            src={artImg}
            alt="Art Curation"
            className="rounded-xl object-cover w-full h-[260px] sm:h-[300px]
                       shadow-[0_8px_30px_rgba(249,115,22,0.15)]"
          />
          <p
            className="text-center font-semibold text-lg mt-4
                       bg-gradient-to-r from-[#F97316] to-[#FACC15]
                       bg-clip-text text-transparent"
          >
            Art Curation
          </p>
        </motion.div>

        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed"
        >
          <p className="mb-4">
            Art connects souls, transcending walls and galleries. At{" "}
            <strong className="text-[#F59E0B]">EZFilm</strong>, we bring art to
            life — transforming spaces into stories and emotions into shared
            experiences. Whether through exhibitions, festivals, or live
            showcases, we curate experiences that move hearts.
          </p>

          <p className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
            We curate:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Art Festivals & Exhibitions</li>
            <li>Live Performances & Installations</li>
            <li>Community Art & Storytelling Events</li>
            <li>Cultural Experiences & Collaborations</li>
          </ul>

          {/* 🔸 Explore Button (Color Updated Only) */}
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

      {/* 🎨 Floating Icons */}
      {/* Palette Icon */}
      <motion.div
        className="absolute text-[#F97316]/40 dark:text-[#F59E0B]/50 
                   top-[12vh] left-[10vw]"
        animate={{ y: [0, -6, 0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      >
        <FaPhotoVideo size={90} className="sm:size-[90px] md:size-[115px]" />
      </motion.div>

      {/* Theater Masks */}
      <motion.div
        className="absolute text-[#F97316]/40 dark:text-[#F59E0B]/50 
                   top-[45vh] right-[12vw]"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      >
        <FaTheaterMasks size={90} className="sm:size-[90px] md:size-[115px]" />
      </motion.div>

      {/* Smiling Face */}
      <motion.div
        className="absolute text-[#F97316]/40 dark:text-[#F59E0B]/50 
                   bottom-[8vh] right-[10vw]"
        animate={{ y: [0, 5, 0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      >
        <FaRegSmile size={90} className="sm:size-[90px] md:size-[115px]" />
      </motion.div>

      {/* Image Frames */}
      <motion.div
        className="absolute text-[#F97316]/40 dark:text-[#F59E0B]/50 
                   bottom-[5vh] left-[10vw]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 9 }}
      >
        <FaRegImages size={90} className="sm:size-[90px] md:size-[115px]" />
      </motion.div>

      {/* Floating Background Artwork Image */}
      <motion.img
        src="https://cdn.pixabay.com/photo/2016/11/29/09/14/painting-1868505_1280.jpg"
        alt="Background Art"
        className="absolute w-[420px] md:w-[600px] opacity-[0.08] dark:opacity-[0.1]
                   top-[25%] left-[10%] rounded-2xl blur-[2px] object-cover select-none pointer-events-none"
        animate={{ y: [0, -15, 0, 15, 0], rotate: [0, 3, -3, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
}
