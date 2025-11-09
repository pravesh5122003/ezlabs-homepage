import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 md:pt-32 min-h-screen flex flex-col items-center justify-center text-center 
                 max-w-6xl mx-auto px-6 transition-colors duration-700
                 bg-gradient-to-b from-blue-50 via-indigo-50 to-white 
                 dark:from-gray-900 dark:via-gray-800 dark:to-black"
    >
      {/* ✨ Text Section */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
         <motion.h1
  className="text-4xl md:text-6xl font-extrabold leading-tight 
             bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
             bg-clip-text text-transparent 
             dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400"
  animate={{
    x: [0, 10, 0, -10, 0],
    y: [0, -5, 0, 5, 0]
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  Empowering Tech <br />
  <span className="text-gray-900 dark:text-white">Innovation & Vision</span>
</motion.h1>



        <p
          className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed 
                     max-w-2xl mx-auto transition-colors duration-500"
        >
          Welcome to <strong className="text-blue-700 dark:text-blue-400">EZTech</strong> — 
          where technology meets creativity. We build intelligent solutions
          that inspire, engage, and transform ideas into reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="/contact"
            className="px-8 py-3 rounded-xl text-white font-semibold 
                       bg-gradient-to-r from-blue-600 to-indigo-600 
                       shadow-[0_6px_20px_rgba(79,70,229,0.3)] 
                       hover:shadow-[0_8px_25px_rgba(79,70,229,0.4)] 
                       transform hover:scale-105 transition-all duration-300
                       dark:from-blue-500 dark:to-indigo-500"
          >
            Get In Touch
          </a>
          <a
            href="/services"
            className="px-8 py-3 rounded-xl font-semibold border-2 border-blue-600 text-blue-600 
                       hover:bg-blue-600 hover:text-white 
                       dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-500 dark:hover:text-white 
                       transition-all duration-300 transform hover:scale-105"
          >
            Explore Services
          </a>
        </div>
      </motion.div>

      {/* 💡 Dual Innovation Cards */}
      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        {/* Card 1: AI & Automation */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-8 rounded-2xl shadow-[0_10px_40px_rgba(59,130,246,0.2)] 
                     bg-white/80 dark:bg-gray-900/70 backdrop-blur-lg 
                     border border-blue-100 dark:border-gray-700 transition-all duration-500"
        >
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">
            🤖 AI & Automation
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Empower your business with smart automation. From intelligent
            workflows to predictive analytics, we harness AI to boost efficiency
            and drive innovation.
          </p>
        </motion.div>

        {/* Card 2: Digital Transformation */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-8 rounded-2xl shadow-[0_10px_40px_rgba(99,102,241,0.25)] 
                     bg-white/80 dark:bg-gray-900/70 backdrop-blur-lg 
                     border border-indigo-100 dark:border-gray-700 transition-all duration-500"
        >
          <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">
            🌐 Digital Transformation
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Redefine the way your business interacts with technology. We deliver
            cutting-edge solutions that combine design, innovation, and
            scalability for tomorrow’s challenges.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
