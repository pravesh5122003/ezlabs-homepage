import React from "react";
import { motion } from "framer-motion";
import { FaPhotoVideo, FaTheaterMasks, FaRegSmile, FaRegImages } from "react-icons/fa";
import artImg from "../assets/services/art.png";

export default function ArtCuration() {
  return (
    <section
      id="art-curation"
      className="relative min-h-screen flex flex-col justify-center bg-[#FCF9F5] 
                 dark:bg-gray-900 overflow-hidden px-6 py-16 md:px-12 md:py-24"
    >
      {/* 🖋 Header */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-gray-900 dark:text-gray-100 leading-relaxed">
        <span className="italic font-normal text-gray-700 dark:text-gray-300">
          “V take art where it belongs, to the people.”
        </span>{" "}
        – Vernita Verma
      </h2>

      {/* 🖼️ Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-6xl mx-auto">
        {/* Image Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg 
                     hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-all duration-500 
                     w-[90%] sm:w-[350px] md:w-[380px]"
        >
          <img
            src={artImg}
            alt="Art Curation"
            className="rounded-xl object-cover w-full h-[250px] sm:h-[300px]"
          />
          <p className="text-center font-medium text-lg mt-3 text-gray-800 dark:text-gray-200">
            Art Curation
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed"
        >
          <p className="mb-4">
            Art isn’t meant to sit on distant walls – it’s meant to breathe, to travel, 
            to belong. Through every festival, performance, and gathering, we help stories 
            find their stage and their people.
          </p>

          <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
            V curates:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Art Festivals</li>
            <li>Live Performances</li>
            <li>Community Events</li>
            <li>Cultural Storytelling</li>
          </ul>

          {/* Explore Now */}
          <div className="mt-6 flex items-center gap-3">
            <span className="text-orange-600 font-semibold cursor-pointer hover:underline">
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
              className="text-orange-500 text-2xl font-bold"
            >
              ➜
            </motion.span>
          </div>
        </motion.div>
      </div>

      {/* 🎨 Decorative Icons - Exact positions and sizes */}

      {/* Bottom Left - Hand with Shapes */}
      <motion.div
        className="absolute text-blue-600/40 dark:text-indigo-400/50 
                   left-[100px] bottom-[100px] md:left-[120px] md:bottom-[120px] 
                   h-[110px] w-[110px]"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      >
        <FaPhotoVideo size={90} className="sm:size-[90px] md:size-[110px]" />
      </motion.div>

      {/* Top Right - Picture Frame */}
      <motion.div
        className="absolute text-blue-600/40 dark:text-indigo-400/50 
                   top-[150px] right-[200px] md:top-[150px] md:right-[160px] 
                   h-[110px] w-[110px]"
        animate={{ rotate: [0, 3, -3, 0] }}
        transition={{ repeat: Infinity, duration: 9 }}
      >
        <FaRegImages size={90} className="sm:size-[90px] md:size-[110px]" />
      </motion.div>

      {/* Middle Right - Wall Bricks */}
      <motion.div
        className="absolute text-blue-600/40 dark:text-indigo-400/50 
                   top-[400px] right-[300px] md:top-[400px] md:right-[300px] 
                   h-[110px] w-[110px]"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      >
        <FaTheaterMasks size={90} className="sm:size-[90px] md:size-[110px]" />
      </motion.div>

      {/* Bottom Right - Tent/Stage */}
      <motion.div
        className="absolute text-blue-600/40 dark:text-indigo-400/50 
                   bottom-[120px] right-[220px] md:bottom-[120px] md:right-[220px] 
                   h-[110px] w-[110px]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 9 }}
      >
        <FaRegSmile size={90} className="sm:size-[90px] md:size-[110px]" />
      </motion.div>
    </section>
  );
}
