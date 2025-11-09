import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Portfolio() {
  // 🎬 Updated video playlist with working cinematic videos
  const videos = [
    {
      id: 1,
      title: "Frames of Emotion",
      url: "https://www.youtube.com/embed/B2miC2XOZ9c", // ✅ Working video
    },
    {
      id: 2,
      title: "Cinematic Vision",
      url: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    },
    {
      id: 3,
      title: "Creative Expression",
      url: "https://www.youtube.com/embed/ScMzIvxBSi4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () =>
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  const prevVideo = () =>
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);

  const currentVideo = videos[currentIndex];

  return (
    <section
      id="portfolio"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6 
                 bg-gradient-to-b from-[#fffaf5] via-[#fff6eb] to-white
                 dark:from-[#0F0F0F] dark:via-[#1A1A1A] dark:to-[#000000]
                 transition-all duration-700 relative overflow-hidden"
    >
      {/* ✨ Cinematic Background Glow */}
      <motion.div
        className="absolute top-0 left-0 w-80 h-80 bg-[#F97316]/20 dark:bg-[#F59E0B]/15 rounded-full blur-[100px]"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#FACC15]/25 dark:bg-[#F97316]/15 rounded-full blur-[100px]"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      {/* 🎞️ Decorative Camera Background */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/1025/1025675.png"
        alt="camera decoration"
        className="absolute left-[5%] top-[10%] w-36 md:w-52 opacity-[0.08] rotate-[-10deg]"
        animate={{ y: [0, -10, 0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />

      {/* 🎬 Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-2 
                     bg-gradient-to-r from-[#F97316] via-[#F59E0B] to-[#FACC15]
                     bg-clip-text text-transparent drop-shadow-[0_3px_15px_rgba(249,115,22,0.4)]"
        >
          The Highlight Reel
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Experience the motion, emotion, and magic behind every frame.
        </p>
      </motion.div>

      {/* 🎥 Video Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-5xl border-[6px] border-[#F59E0B]/40 dark:border-[#F97316]/30 
                   rounded-xl shadow-[0_10px_50px_rgba(249,115,22,0.2)] 
                   bg-white/80 dark:bg-[#0E0E0E]/80 backdrop-blur-xl 
                   overflow-hidden flex items-center justify-center"
      >
        {/* ⬅️ Left Arrow */}
        <button
          onClick={prevVideo}
          className="absolute left-3 md:left-6 z-20 bg-white/70 dark:bg-gray-800/70 p-3 rounded-full shadow-md 
                     hover:scale-110 transition-all duration-300 hover:bg-[#FDE68A]/50 dark:hover:bg-[#F97316]/20"
        >
          <FaChevronLeft className="text-[#F59E0B] dark:text-[#FACC15] text-xl" />
        </button>

        {/* 🎞️ Video Player */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVideo.id}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[300px] md:h-[480px] relative"
          >
            <iframe
              width="100%"
              height="100%"
              src={currentVideo.url}
              title={currentVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </motion.div>
        </AnimatePresence>

        {/* ➡️ Right Arrow */}
        <button
          onClick={nextVideo}
          className="absolute right-3 md:right-6 z-20 bg-white/70 dark:bg-gray-800/70 p-3 rounded-full shadow-md 
                     hover:scale-110 transition-all duration-300 hover:bg-[#FDE68A]/50 dark:hover:bg-[#F97316]/20"
        >
          <FaChevronRight className="text-[#F59E0B] dark:text-[#FACC15] text-xl" />
        </button>
      </motion.div>

      {/* 🎥 Video Title */}
      <motion.h3
        key={currentVideo.title}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8 text-xl font-semibold 
                   bg-gradient-to-r from-[#F97316] to-[#FACC15]
                   bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(249,115,22,0.3)]"
      >
        {currentVideo.title}
      </motion.h3>

      {/* 🎬 Subheading / Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-3 max-w-2xl text-center text-gray-700 dark:text-gray-400 text-base leading-relaxed"
      >
        Every frame tells a story — from concept to camera, we create visuals
        that move, inspire, and stay with you.
      </motion.p>

      {/* 🎞️ Decorative Film Strip Footer */}
      <div className="mt-10 w-full max-w-5xl h-[20px] bg-[repeating-linear-gradient(90deg,#fcd34d_0_20px,#fde68a_20px_40px)] dark:bg-[repeating-linear-gradient(90deg,#78350f_0_20px,#f97316_20px_40px)] rounded-md shadow-inner"></div>
    </section>
  );
}
