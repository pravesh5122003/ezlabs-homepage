import React from "react";
import { motion } from "framer-motion";
import { FaMountainSun } from "react-icons/fa6";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-[#FFFDF8] via-[#FFF8EE] to-[#FFF5E8] 
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                 px-6 md:px-16 lg:px-24 py-20 md:py-28 overflow-hidden"
    >
      {/* ✨ Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2
          className="text-3xl md:text-4xl font-serif text-gray-800 dark:text-gray-100 mb-4 
                     tracking-wide leading-snug"
        >
          A <span className="text-blue-600 dark:text-indigo-400 font-semibold">montage</span> of
          familiar faces and names.
        </h2>
        <p
          className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed"
        >
          Some stories come from the biggest names, others begin with bold, rising voices.
          <br />
          We’ve been fortunate to walk alongside both — listening, creating, and building stories
          that <span className="text-blue-600 dark:text-indigo-400 font-medium">matter.</span>
        </p>
      </motion.div>

      {/* 🖋 Poetic Quote (Right Aligned) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-[75%] ml-auto text-right mb-16"
      >
        <p
          className="italic text-xl md:text-2xl text-gray-700 dark:text-indigo-300 leading-relaxed font-light"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          “Every project is more than just a brief — it’s a new chapter waiting to be written.
          Together, we’ve crafted tales that inspire, connect, and endure.”
        </p>
      </motion.div>

        {/* 📊 Stats Cards */}
        <div className="relative flex flex-row justify-center items-center gap-0 mt-16 mb-24 overflow-x-visible">
    {[
        { number: "85+", label: "Projects", rotate: "-6deg", z: "z-30", delay: 0 },
        { number: "50+", label: "Happy Clients", rotate: "-2deg", z: "z-20", delay: 0.15 },
        { number: "10+", label: "Experts Team", rotate: "3deg", z: "z-10", delay: 0.3 },
    ].map((stat, index) => (
        <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: stat.delay }}
        whileHover={{ rotate: 0, scale: 1.05 }}
        className={`relative bg-[#FAF3E0] text-center shadow-[0_10px_30px_rgba(0,0,0,0.15)] 
                    px-10 py-8 w-[200px] sm:w-[230px] rounded-md border border-[#E4C59E]
                    transform rotate-[${stat.rotate}] ${stat.z} 
                    transition-all duration-500 ease-out cursor-default 
                    hover:shadow-[0_15px_45px_rgba(0,0,0,0.25)] hover:translate-y-[-5px]`}
        style={{
            marginLeft: index === 0 ? "0px" : "-50px", // slight overlap
        }}
        >
        <h3 className="text-5xl font-bold text-[#1E1E3F] tracking-tight">{stat.number}</h3>
        <p className="text-[#C84B31] text-[16px] font-medium mt-2">{stat.label}</p>
        </motion.div>
    ))}
    </div>


      {/* 🏷 Brand Collaborations */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap justify-center items-center gap-10 md:gap-14 text-2xl md:text-3xl font-semibold"
      >
        {[
          { name: "CocaCola", color: "#E62B1E" },
          { name: "TED", color: "#E62B1E" },
          { name: "ARTON", color: "#E62B1E" },
          { name: "DF", color: "#E62B1E" },
        ].map((brand, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4 + i }}
            className="italic"
            style={{ color: brand.color }}
          >
            {brand.name}
          </motion.span>
        ))}
      </motion.div>

      {/* 🌄 Decorative Mountain Icon */}
      <motion.div
        className="absolute bottom-[40px] right-[70px] text-orange-300/60 dark:text-indigo-400/30"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      >
        <FaMountainSun size={150} />
      </motion.div>

      {/* 🌈 Decorative Gradient Blobs */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-200/30 dark:bg-indigo-500/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[15%] right-[10%] w-64 h-64 bg-orange-200/30 dark:bg-purple-400/20 blur-[100px] rounded-full animate-pulse" />
    </section>
  );
}
