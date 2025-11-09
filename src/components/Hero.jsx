// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import filmCamera from "../assets/services/film.png"; // 🎬 Your film image

// export default function Hero() {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <section
//       id="home"
//       className="pt-28 md:pt-32 min-h-screen flex flex-col items-center justify-center text-center 
//                  max-w-6xl mx-auto px-6 transition-colors duration-700
//                  bg-gradient-to-b from-[#fff8f2] via-[#fdf6ec] to-[#fff] 
//                  dark:from-[#0F0F0F] dark:via-[#1C1C1C] dark:to-[#000000]"
//     >
//       {/* 🎬 Cinematic Text Section */}
//       <motion.div
//         className="space-y-6"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         <motion.h1
//           className="text-4xl md:text-6xl font-extrabold leading-tight 
//                      bg-gradient-to-r from-[#F97316] via-[#F59E0B] to-[#FACC15]
//                      bg-clip-text text-transparent tracking-wide
//                      drop-shadow-[0_3px_20px_rgba(249,115,22,0.3)]
//                      dark:drop-shadow-[0_3px_25px_rgba(249,115,22,0.6)]"
//           animate={{ y: [0, -5, 0, 5, 0] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         >
//           Empowering Stories <br />
//           <span className="text-[#D97706] dark:text-[#FFE5B4]">
//             Through Film & Vision
//           </span>
//         </motion.h1>

//         <p
//           className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto 
//                      font-light tracking-wide transition-colors duration-500"
//         >
//           Welcome to{" "}
//           <strong className="text-[#EA580C] dark:text-[#F59E0B]">EZ Films</strong> — 
//           where creativity meets cinematic excellence. We bring your stories to life 
//           through powerful visuals, storytelling, and emotion that stays with you.
//         </p>

//         {/* 🎬 Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
//           <a
//             href="/contact"
//             className="px-8 py-3 rounded-xl text-white font-semibold 
//                        bg-gradient-to-r from-[#F97316] to-[#EA580C]
//                        shadow-[0_6px_20px_rgba(249,115,22,0.3)] 
//                        hover:shadow-[0_8px_25px_rgba(249,115,22,0.4)] 
//                        transform hover:scale-105 transition-all duration-300
//                        dark:from-[#F97316] dark:to-[#EA580C]"
//           >
//             Get In Touch
//           </a>
//           <a
//             href="/services"
//             className="px-8 py-3 rounded-xl font-semibold border-2 border-[#F59E0B] text-[#F59E0B] 
//                        hover:bg-[#F59E0B] hover:text-black 
//                        dark:border-[#F59E0B] dark:text-[#F59E0B] dark:hover:bg-[#F59E0B] dark:hover:text-black
//                        transition-all duration-300 transform hover:scale-105"
//           >
//             Explore Films
//           </a>
//         </div>
//       </motion.div>

//       {/* 🎞️ Floating Vision Card */}
//       <motion.div
//         className="relative mt-20 flex justify-center w-full max-w-md"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.div
//           onClick={() => setIsExpanded(!isExpanded)}
//           whileHover={{ scale: 1.05, y: -10 }}
//           animate={{
//             scale: isExpanded ? 1.1 : 1,
//             y: isExpanded ? -20 : 0,
//             transition: { duration: 0.5, ease: "easeInOut" },
//           }}
//           className={`cursor-pointer p-6 rounded-2xl backdrop-blur-md 
//                      border border-[#F97316]/30 
//                      bg-gradient-to-br from-[#fff7ed]/90 to-[#fef3c7]/80 
//                      dark:from-[#1A1A1A]/80 dark:to-[#111111]/70 
//                      shadow-[0_10px_40px_rgba(249,115,22,0.15)] 
//                      dark:shadow-[0_10px_40px_rgba(249,115,22,0.25)] 
//                      text-center transition-all duration-700`}
//         >
//           {/* 🎥 Floating Image */}
//           <motion.img
//             src={filmCamera}
//             alt="Film Production"
//             className="w-44 mx-auto rounded-xl mb-4"
//             animate={{ y: [0, -6, 0] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//           />

//           {/* 🎬 Title */}
//           <h3 className="text-2xl font-bold text-[#D97706] dark:text-[#F59E0B] mb-3 tracking-wide">
//             🎥 Our Vision
//           </h3>

//           {/* 🧭 Card Content */}
//           {!isExpanded ? (
//             <motion.p
//               key="front"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="text-gray-600 dark:text-gray-400 text-base italic transition-all duration-500"
//             >
//               “Where stories breathe life — click to explore our cinematic vision.”
//             </motion.p>
//           ) : (
//             <motion.div
//               key="expanded"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed px-2">
//                 At <strong className="text-[#EA580C] dark:text-[#F59E0B]">EZ Films</strong>,
//                 our vision is to redefine storytelling — blending art, technology,
//                 and emotion to create films that inspire hearts, spark imaginations,
//                 and echo long after the credits roll.
//               </p>
//               <motion.div
//                 className="mt-4 w-12 h-[2px] bg-gradient-to-r from-[#F97316] to-[#F59E0B] mx-auto"
//                 animate={{ width: ["0%", "60%", "100%"] }}
//                 transition={{ duration: 1.5, ease: "easeInOut" }}
//               />
//             </motion.div>
//           )}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import filmCamera from "../assets/services/film.png";
import brandingImg from "../assets/services/Branding.png"; // 🎨 second card image

export default function Hero() {
  const [isExpandedVision, setIsExpandedVision] = useState(false);
  const [isExpandedMission, setIsExpandedMission] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  // 🎬 Words to type
  const words = ["Film", "Branding", "Creation", "Innovation", "Art"];

  // Typing effect logic
  useEffect(() => {
    const currentWord = words[wordIndex];
    if (letterIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentWord[letterIndex]);
        setLetterIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      // Wait, then move to next word
      const hold = setTimeout(() => {
        setDisplayedText("");
        setLetterIndex(0);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 1800);
      return () => clearTimeout(hold);
    }
  }, [letterIndex, wordIndex]);

  return (
    <section
      id="home"
      className="pt-28 md:pt-32 min-h-screen flex flex-col items-center justify-center text-center 
                 max-w-6xl mx-auto px-6 transition-colors duration-700
                 bg-gradient-to-b from-[#fff8f2] via-[#fdf6ec] to-[#fff] 
                 dark:from-[#0F0F0F] dark:via-[#1C1C1C] dark:to-[#000000]"
    >
      {/* ✨ Cinematic Heading */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight 
                     bg-gradient-to-r from-[#F97316] via-[#F59E0B] to-[#FACC15]
                     bg-clip-text text-transparent tracking-wide
                     drop-shadow-[0_3px_20px_rgba(249,115,22,0.3)]
                     dark:drop-shadow-[0_3px_25px_rgba(249,115,22,0.6)]"
          animate={{ y: [0, -5, 0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          Empowering Stories <br />
          <span className="text-[#D97706] dark:text-[#FFE5B4]">
            Through {displayedText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.h1>

        {/* Subtext */}
        <p
          className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto 
                     font-light tracking-wide transition-colors duration-500"
        >
          Welcome to{" "}
          <strong className="text-[#EA580C] dark:text-[#F59E0B]">EZ Films</strong> — 
          where creativity meets cinematic excellence. We bring your stories to life 
          through powerful visuals, storytelling, and emotion that stays with you.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="/contact"
            className="px-8 py-3 rounded-xl text-white font-semibold 
                       bg-gradient-to-r from-[#F97316] to-[#EA580C]
                       shadow-[0_6px_20px_rgba(249,115,22,0.3)] 
                       hover:shadow-[0_8px_25px_rgba(249,115,22,0.4)] 
                       transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </a>
          <a
            href="/services"
            className="px-8 py-3 rounded-xl font-semibold border-2 border-[#F59E0B] text-[#F59E0B] 
                       hover:bg-[#F59E0B] hover:text-black 
                       transition-all duration-300 transform hover:scale-105"
          >
            Explore Films
          </a>
        </div>
      </motion.div>

      {/* 🎞 Floating Dual Cards */}
      <motion.div
        className="relative mt-20 flex flex-col md:flex-row justify-center items-center gap-8 w-full max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* 🎥 Vision Card (Original) */}
       {/* 🎥 Vision Card */}
<motion.div
  onClick={() => setIsExpandedVision(!isExpandedVision)}
  whileHover={{ scale: 1.03 }}
  className="cursor-pointer p-6 rounded-2xl backdrop-blur-md 
             border border-[#F97316]/30 
             bg-gradient-to-br from-[#fff7ed]/90 to-[#fef3c7]/80 
             dark:from-[#1A1A1A]/80 dark:to-[#111111]/70 
             shadow-[0_10px_40px_rgba(249,115,22,0.15)] 
             dark:shadow-[0_10px_40px_rgba(249,115,22,0.25)] 
             text-center transition-all duration-500
             w-[90%] md:w-[45%] min-h-[480px] flex flex-col justify-start"
>
  {/* 🎞️ Image Section */}
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    animate={{ y: isExpandedVision ? -15 : 0, scale: isExpandedVision ? 1.05 : 1 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="relative w-full h-[250px] mb-4 rounded-xl overflow-hidden"
  >
    <motion.img
      src={filmCamera}
      alt="Film Vision"
      className="w-full h-full object-cover rounded-xl"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
  </motion.div>

  {/* 🧭 Card Content */}
  {!isExpandedVision ? (
    <motion.p
      key="front"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-gray-600 dark:text-gray-400 text-base italic transition-all duration-500"
    >
      “Where stories breathe life — click to explore our cinematic vision.”
    </motion.p>
  ) : (
    <motion.div
      key="expanded"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed px-2">
        At <strong className="text-[#EA580C] dark:text-[#F59E0B]">EZ Films</strong>,
        our vision is to redefine storytelling — blending art, technology,
        and emotion to create films that inspire hearts, spark imaginations,
        and echo long after the credits roll.
      </p>
      <motion.div
        className="mt-4 w-12 h-[2px] bg-gradient-to-r from-[#F97316] to-[#F59E0B] mx-auto"
        animate={{ width: ["0%", "60%", "100%"] }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </motion.div>
  )}

  {/* 🎬 Card Title */}
  <h3 className="mt-5 text-2xl font-bold text-[#D97706] dark:text-[#F59E0B] mb-2 tracking-wide">
    🎥 Our Vision
  </h3>
</motion.div>


{/* 🎬 Mission Card */}
<motion.div
  onClick={() => setIsExpandedMission(!isExpandedMission)}
  whileHover={{ scale: 1.03 }}
  className="cursor-pointer p-6 rounded-2xl backdrop-blur-md 
             border border-[#F97316]/30 
             bg-gradient-to-br from-[#fff7ed]/90 to-[#fef3c7]/80 
             dark:from-[#1A1A1A]/80 dark:to-[#111111]/70 
             shadow-[0_10px_40px_rgba(249,115,22,0.15)] 
             dark:shadow-[0_10px_40px_rgba(249,115,22,0.25)] 
             text-center transition-all duration-500
             w-[90%] md:w-[45%] min-h-[480px] flex flex-col justify-start"
>
  {/* 🎞️ Image Section */}
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    animate={{ y: isExpandedMission ? -15 : 0, scale: isExpandedMission ? 1.05 : 1 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="relative w-full h-[250px] mb-4 rounded-xl overflow-hidden"
  >
    <motion.img
      src={brandingImg}
      alt="Mission"
      className="w-full h-full object-cover rounded-xl"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
  </motion.div>

  {/* 🧭 Card Content */}
  {!isExpandedMission ? (
    <motion.p
      key="front"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-gray-600 dark:text-gray-400 text-base italic transition-all duration-500"
    >
      “Creativity with purpose — click to reveal our story beyond the screen.”
    </motion.p>
  ) : (
    <motion.div
      key="expanded"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed px-2">
        Our mission is to bring creativity to life through innovation,
        storytelling, and emotion — inspiring a world that connects
        beyond the screen.
      </p>
      <motion.div
        className="mt-4 w-12 h-[2px] bg-gradient-to-r from-[#F97316] to-[#F59E0B] mx-auto"
        animate={{ width: ["0%", "60%", "100%"] }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </motion.div>
  )}

  {/* 🎬 Card Title */}
  <h3 className="mt-5 text-2xl font-bold text-[#D97706] dark:text-[#F59E0B] mb-2 tracking-wide">
    🎬 Our Mission
  </h3>
</motion.div>


      </motion.div>
    </section>
  );
}
