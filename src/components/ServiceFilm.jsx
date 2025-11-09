import React from "react";
import { motion } from "framer-motion";
import { FaCamera, FaVideo, FaFilm, FaPhotoVideo } from "react-icons/fa";
import filmImg from "../assets/services/film.png";

export default function FilmProduction() {
  return (
    <section
      id="film-production"
      className="relative min-h-screen flex flex-col justify-center bg-[#FCF9F5] 
                 dark:bg-gray-900 overflow-hidden px-6 py-16 md:px-12 md:py-24"
    >
      {/* 🎬 Header Quote */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-gray-900 dark:text-gray-100 leading-relaxed">
        <span className="italic font-normal text-gray-700 dark:text-gray-300">
          “Filmmaking is a chance to live many lifetimes.”
        </span>{" "}
        – Robert Altman
      </h2>

      {/* 🖼️ Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-6xl mx-auto">
        {/* 🎥 Image Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg 
                     hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-all duration-500 
                     w-[90%] sm:w-[350px] md:w-[380px]"
        >
          <img
            src={filmImg}
            alt="Film Production"
            className="rounded-xl object-cover w-full h-[250px] sm:h-[300px]"
          />
          <p className="text-center font-medium text-lg mt-3 text-gray-800 dark:text-gray-200">
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
            Who says films are just an escape? We see them as a way to live
            many lives — to feel, to explore, and to tell stories that stay.
            With each film, we carry new memories and new reasons to keep
            creating.
          </p>

          <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
            V crafts:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Documentaries</li>
            <li>Corporate Videos</li>
            <li>2D Animation Videos</li>
            <li>3D Animation Videos</li>
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

      {/* 🎞️ Decorative Icons — Responsive */}
      {/* Camera (Top-Left) */}
                <motion.div
            className="absolute text-blue-600/40 dark:text-indigo-400/50 
                        top-[10vh] left-[10vw] md:top-[191px] md:left-[1300px]
                        h-[142px] w-[115px]"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 9 }}
            >
            <FaCamera
                size={70} // 👈 Automatically adjusts for all screens
                className="sm:size-[90px] md:size-[115px]"
            />
            </motion.div>


      {/* 🎥 Video Camera (Middle Right) */}
            <motion.div
            className="absolute text-blue-600/40 dark:text-indigo-400/50 
                        top-[10vh] left-[60vw] 
                        md:top-[480px] md:left-[1107px] 
                        h-[92.53px] w-[113.31px]"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 10 }}
            >
            <FaVideo
                size={70}
                className="sm:size-[90px] md:size-[113px]" // 113px width alignment
            />
            </motion.div>


      {/* Film Reel (Bottom Right) */}
      <motion.div
        className="absolute text-blue-600/40 dark:text-indigo-400/50 
                   bottom-[8vh] right-[8vw] md:bottom-[120px] md:right-[180px]"
        animate={{ rotate: [0, 3, -3, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      >
        <FaFilm size={70} className="sm:size-[90px] md:size-[115px]" />
      </motion.div>

      {/* Photo Video (Bottom Left) */}
      <motion.div
        className="absolute text-blue-600/40 dark:text-indigo-400/50 
                   bottom-[5vh] left-[10vw] md:bottom-[40px] md:left-[170px]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
      >
        <FaPhotoVideo size={70} className="sm:size-[90px] md:size-[115px]" />
      </motion.div>
    </section>
  );
}
