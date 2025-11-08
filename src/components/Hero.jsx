



// import React from "react";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="pt-28 md:pt-32 bg-gray-50 min-h-screen flex flex-col items-center justify-center text-center max-w-6xl mx-auto px-6"
//     >
//       {/* ✨ Left text area (now centered) */}
//       <motion.div
//         className="space-y-6"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
//           Empowering <span className="text-orange-600">Creativity</span> and Innovation
//         </h1>

//         <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
//           Welcome to <strong>EZ Labs</strong> — we craft digital experiences
//           that inspire, engage, and connect. Let’s create something amazing
//           together!
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
//           <a
//             href="#contact"
//             className="btn btn-primary shadow-md hover:shadow-lg hover:scale-105 transition-transform"
//           >
//             Contact Us
//           </a>
//           <a
//             href="#services"
//             className="btn btn-outline hover:scale-105 transition-transform"
//           >
//             Learn More
//           </a>
//         </div>
//       </motion.div>

//       {/* 🖼️ Right image area (now below the content) */}
//       <motion.div
//         className="mt-12 flex justify-center"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/2920/2920219.png"
//           alt="hero illustration"
//           className="w-80 md:w-[28rem] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-500"
//         />
//       </motion.div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 md:pt-32 min-h-screen flex flex-col items-center justify-center text-center 
                 max-w-6xl mx-auto px-6 transition-colors duration-700
                 bg-gray-50 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-black"
    >
      {/* ✨ Text Section */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1
          className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 
                     dark:text-white transition-colors duration-500"
        >
          Empowering{" "}
          <span className="text-orange-600 dark:text-orange-400">Creativity</span> and{" "}
          <span className="text-gray-800 dark:text-gray-300">Innovation</span>
        </h1>

        <p
          className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed 
                     max-w-2xl mx-auto transition-colors duration-500"
        >
          Welcome to <strong className="text-gray-900 dark:text-white">EZ Labs</strong> — we craft digital
          experiences that inspire, engage, and connect. Let’s create something
          amazing together!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="#contact"
            className="btn btn-primary shadow-md hover:shadow-lg hover:scale-105 transition-transform
                       dark:bg-orange-500 dark:hover:bg-orange-600 dark:text-white"
          >
            Contact Us
          </a>
          <a
            href="#services"
            className="btn btn-outline hover:scale-105 transition-transform
                       dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-400 dark:hover:text-white"
          >
            Learn More
          </a>
        </div>
      </motion.div>

      {/* 🖼️ Image Section (Below Content) */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2920/2920219.png"
          alt="hero illustration"
          className="w-80 md:w-[28rem] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] 
                     hover:scale-105 transition-transform duration-500
                     dark:shadow-[0_8px_40px_rgba(255,255,255,0.1)]"
        />
      </motion.div>
    </section>
  );
}
