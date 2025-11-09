import React from "react";
import { motion } from "framer-motion";
import { FaRegStar, FaRegClipboard, FaUsersCog } from "react-icons/fa";
import brandingImg from "../assets/services/Branding.png";

export default function Branding() {
  return (
    <section
      id="branding"
      className="relative min-h-screen flex flex-col justify-center bg-[#FCF9F5] 
                 dark:bg-gray-900 overflow-hidden px-6 py-16 md:px-12 md:py-24"
    >
      {/* 🧠 Header Quote */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-gray-900 dark:text-gray-100 leading-relaxed">
        <span className="italic font-normal text-gray-700 dark:text-gray-300">
          “A brand is a voice, and a product is a souvenir.”
        </span>{" "}
        – Lisa Gansky
      </h2>

      {/* 🖼️ Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-6xl mx-auto">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg 
                     hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-all duration-500 
                     w-[90%] sm:w-[350px] md:w-[380px]"
        >
          <img
            src={brandingImg}
            alt="Branding"
            className="rounded-xl object-cover w-full h-[250px] sm:h-[300px]"
          />
          <p className="text-center font-medium text-lg mt-3 text-gray-800 dark:text-gray-200">
            Branding
          </p>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed"
        >
          <p className="mb-4">
            A brand isn’t just what you see – it’s what you remember, what you
            carry home, and what you trust. We shape brands that people
            remember, return to, and fall in love with.
          </p>

          <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
            V creates:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Branding & Communication</li>
            <li>Market Mapping</li>
            <li>Content Management</li>
            <li>Social Media Management</li>
            <li>Rebranding</li>
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

      {/* 🎨 Decorative Icons (Exact Positions + Responsive) */}
      {/* Bottom Left Icon */}
      <motion.div
        className="absolute text-blue-600/40 dark:text-indigo-400/50 
                   left-[150px] bottom-[180px] md:left-[90px] md:bottom-[90px] 
                   h-[110px] w-[110px]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
      >
        <FaUsersCog size={90} className="sm:size-[90px] md:size-[110px]" />
      </motion.div>

      {/* Top Right Icon */}
      <motion.div
        className="absolute text-blue-600/40 dark:text-indigo-400/50 
                   top-[150px] right-[200px] md:top-[200px] md:right-[150px] 
                   h-[110px] w-[110px]"
        animate={{ rotate: [0, 3, -3, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      >
        <FaRegStar size={90} className="sm:size-[90px] md:size-[110px]" />
      </motion.div>

      {/* Middle Right Icon */}
      <motion.div
        className="absolute text-blue-600/40 dark:text-indigo-400/50 
                   top-[400px] right-[300px] md:top-[400px] md:right-[300px] 
                   h-[110px] w-[110px]"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      >
        <FaRegClipboard size={90} className="sm:size-[90px] md:size-[110px]" />
      </motion.div>

      {/* Middle Right Icon */}
      <motion.div
        className="absolute text-blue-600/40 dark:text-indigo-400/50 
                        top-[10vh] left-[60vw] 
                        md:top-[680px] md:left-[1307px] 
                        h-[92.53px] w-[113.31px]"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      >
        <FaRegClipboard size={90} className="sm:size-[90px] md:size-[110px]" />
      </motion.div>
    </section>
  );
}
