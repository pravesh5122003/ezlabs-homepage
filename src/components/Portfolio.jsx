import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Portfolio() {
  // 🎥 Replace with your actual YouTube embed URLs
  const videos = [
    {
      id: 1,
      title: "The Art of Storytelling",
      url: "https://www.youtube.com/embed/ysz5S6PUM-U",
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
                 bg-[#fff6f1] dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800
                 transition-all duration-700 relative overflow-hidden"
    >
      {/* 🎞️ Decorative Camera Background */}
      <div className="absolute left-5 top-10 opacity-10">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1025/1025675.png"
          alt="camera decoration"
          className="w-36 md:w-52 rotate-[-10deg]"
        />
      </div>

      {/* 🎬 Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          The Highlight Reel
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Watch the magic we’ve captured.
        </p>
      </motion.div>

      {/* 🎥 Video Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-5xl border-[8px] border-gray-300 dark:border-gray-700 
                   rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] bg-white/80 dark:bg-gray-900/80 
                   backdrop-blur-md overflow-hidden flex items-center justify-center"
      >
        {/* ⬅️ Left Arrow */}
        <button
          onClick={prevVideo}
          className="absolute left-3 md:left-6 z-20 bg-white/70 dark:bg-gray-800/70 p-3 rounded-full shadow-md 
                     hover:scale-110 transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-gray-700"
        >
          <FaChevronLeft className="text-gray-700 dark:text-gray-300 text-xl" />
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
                     hover:scale-110 transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-gray-700"
        >
          <FaChevronRight className="text-gray-700 dark:text-gray-300 text-xl" />
        </button>
      </motion.div>

      {/* 🎥 Video Title */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8 text-xl font-semibold text-gray-800 dark:text-gray-200"
      >
        {currentVideo.title}
      </motion.h3>

      {/* 🎬 Decorative Film Strip Footer */}
      <div className="mt-10 w-full max-w-5xl h-[20px] bg-[repeating-linear-gradient(90deg,#d1d5db_0_20px,#f3f4f6_20px_40px)] dark:bg-[repeating-linear-gradient(90deg,#374151_0_20px,#1f2937_20px_40px)] rounded-md"></div>
    </section>
  );
}
