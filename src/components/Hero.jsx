import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 md:pt-32 bg-gray-50 min-h-screen flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6"
    >
      {/* Left text area */}
      <motion.div
        className="md:w-1/2 space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Empowering <span className="text-orange-600">Creativity</span> and
          Innovation
        </h1>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          Welcome to <strong>EZ Labs</strong> — we craft digital experiences
          that inspire, engage, and connect. Let’s create something amazing
          together!
        </p>

        <div className="flex gap-4 pt-2">
          <a
            href="#contact"
            className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-700 transition"
          >
            Contact Us
          </a>
          <a
            href="#services"
            className="border border-orange-600 text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-600 hover:text-white transition"
          >
            Learn More
          </a>
        </div>
      </motion.div>

      {/* Right image area */}
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
  src="https://cdn-icons-png.flaticon.com/512/2920/2920219.png"
  alt="hero illustration"
  className="w-96 md:w-[28rem] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"

/>

      </motion.div>
    </section>
  );
}
