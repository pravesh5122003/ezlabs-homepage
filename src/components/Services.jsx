// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import filmImg from "../assets/services/film.png";
// import brandingImg from "../assets/services/Branding.png";
// import artImg from "../assets/services/art.png";

// export default function Services() {
//   const navigate = useNavigate();

//   // ✅ Services data (unchanged)
//   const services = [
//     {
//       title: "Film Production",
//       img: filmImg,
//       link: "/services/branding",
//       rotation: -8,
//       tapePosition: "left-10 rotate-[-5deg]",
//       shadow: "shadow-[0_10px_30px_rgba(249,115,22,0.3)]",
//     },
//     {
//       title: "Branding",
//       img: brandingImg,
//       link: "/services/branding",
//       rotation: 0,
//       tapePosition: "left-12 rotate-[3deg]",
//       shadow: "shadow-[0_10px_30px_rgba(245,158,11,0.3)]",
//     },
//     {
//       title: "Art Curation",
//       img: artImg,
//       link: "/services/art",
//       rotation: 8,
//       tapePosition: "right-10 rotate-[8deg]",
//       shadow: "shadow-[0_10px_30px_rgba(250,204,21,0.3)]",
//     },
//   ];

//   return (
//     <section
//       id="services"
//       className="relative py-24 min-h-screen overflow-hidden flex flex-col justify-center items-center
//                  bg-gradient-to-b from-[#fffaf5] via-[#fff6eb] to-[#fff]
//                  dark:from-[#0F0F0F] dark:via-[#1A1A1A] dark:to-[#000000]
//                  text-center transition-colors duration-700"
//     >
//       {/* 🎥 Floating Background Elements */}
//       <motion.img
//         src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" // Camera
//         alt="Camera"
//         className="absolute w-16 md:w-24 opacity-15 top-20 left-10"
//         animate={{
//           y: [0, -15, 0],
//           x: [0, 10, 0, -10, 0],
//           rotate: [0, 5, -5, 0],
//         }}
//         transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <motion.img
//         src="https://cdn-icons-png.flaticon.com/512/742/742751.png" // Laptop
//         alt="Laptop"
//         className="absolute w-20 md:w-28 opacity-15 bottom-24 right-16"
//         animate={{
//           y: [0, -10, 0, 10, 0],
//           x: [0, 15, 0, -15, 0],
//           rotate: [0, 10, -10, 0],
//         }}
//         transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <motion.img
//         src="https://cdn-icons-png.flaticon.com/512/2584/2584720.png" // Art palette
//         alt="Art Palette"
//         className="absolute w-16 md:w-20 opacity-15 top-1/2 left-[80%]"
//         animate={{
//           y: [0, -12, 0, 12, 0],
//           x: [0, -10, 0, 10, 0],
//           rotate: [0, 15, -15, 0],
//         }}
//         transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* ✨ Section Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         className="text-3xl md:text-5xl font-extrabold mb-12 
//                    bg-gradient-to-r from-[#F97316] via-[#F59E0B] to-[#FACC15]
//                    bg-clip-text text-transparent tracking-wide
//                    drop-shadow-[0_4px_20px_rgba(249,115,22,0.4)]"
//       >
//         The storyboard reveals <br className="md:hidden" /> the breadth of our craft 🎬
//       </motion.h2>

//       {/* 🎞️ Service Cards */}
//       <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 z-10">
//         {services.map((service, index) => (
//           <motion.div
//             key={index}
//             onClick={() => navigate(service.link)}
//             initial={{ rotate: service.rotation, y: 10 }}
//             whileHover={{
//               rotate: 0,
//               scale: 1.07,
//               y: -8,
//               boxShadow: "0 15px 40px rgba(249,115,22,0.5)",
//             }}
//             transition={{
//               type: "spring",
//               stiffness: 180,
//               damping: 12,
//             }}
//             className={`relative bg-white/80 dark:bg-[#0E0E0E]/80 ${service.shadow}
//                         rounded-2xl w-[90%] md:w-[320px] p-4 cursor-pointer 
//                         backdrop-blur-xl border border-[#F59E0B]/20
//                         transform transition-all duration-300 hover:border-[#FACC15]/50`}
//           >
//             {/* 🖼️ Service Image */}
//             <motion.img
//               src={service.img}
//               alt={service.title}
//               className="rounded-xl w-full h-56 object-cover"
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.3 }}
//             />

//             {/* 🎬 Service Title */}
//             <p className="mt-4 font-semibold text-lg 
//                           bg-gradient-to-r from-[#F59E0B] to-[#FACC15]
//                           bg-clip-text text-transparent tracking-wide">
//               {service.title}
//             </p>

//             {/* 🟡 Tape */}
//             <div
//               className={`absolute -top-4 ${service.tapePosition} w-24 h-5 
//                           bg-gradient-to-r from-[#F59E0B]/90 to-[#FACC15]/90 
//                           opacity-80 rounded-sm shadow-md`}
//             ></div>
//           </motion.div>
//         ))}
//       </div>

//       {/* 🎨 Subtext */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.6, duration: 0.8 }}
//         className="mt-16 text-gray-700 dark:text-gray-300 text-base md:text-lg 
//                    max-w-2xl mx-auto px-4 leading-relaxed"
//       >
//         Every frame, brand, and artwork we craft tells a cinematic story. From the lens to the canvas, 
//         we merge imagination and innovation — capturing emotion, artistry, and experience that lingers long after the scene fades.
//       </motion.p>
//     </section>
//   );
// }


import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import filmImg from "../assets/services/film.png";
import brandingImg from "../assets/services/Branding.png";
import artImg from "../assets/services/art.png";

export default function Services() {
  const navigate = useNavigate();

  // Fixed correct links for each service
  const services = [
    {
      title: "Film Production",
      img: filmImg,
      link: "/services/film", // ✅ Correct link
      rotation: -8,
      tapePosition: "left-10 rotate-[-5deg]",
      shadow: "shadow-[0_10px_30px_rgba(249,115,22,0.25)]",
    },
    {
      title: "Branding",
      img: brandingImg,
      link: "/services/branding",
      rotation: 0,
      tapePosition: "left-12 rotate-[3deg]",
      shadow: "shadow-[0_10px_30px_rgba(245,158,11,0.25)]",
    },
    {
      title: "Art Curation",
      img: artImg,
      link: "/services/art",
      rotation: 8,
      tapePosition: "right-10 rotate-[8deg]",
      shadow: "shadow-[0_10px_30px_rgba(253,224,71,0.25)]",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-[#fffaf5] via-[#fff6eb] to-white 
                 dark:from-[#0F0F0F] dark:via-[#1A1A1A] dark:to-[#000000]
                 text-center transition-colors duration-700 overflow-hidden relative"
    >
      {/* ✨ Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-extrabold mb-10 
                   bg-gradient-to-r from-[#F97316] via-[#F59E0B] to-[#FACC15]
                   bg-clip-text text-transparent drop-shadow-[0_3px_20px_rgba(249,115,22,0.4)]"
      >
        The storyboard reveals the breadth of our craft 🎬
      </motion.h2>

      {/* 📽️ Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            onClick={() => navigate(service.link)} // ✅ Navigate properly
            initial={{ rotate: service.rotation, y: 10, opacity: 0 }}
            animate={{ rotate: service.rotation, y: 0, opacity: 1 }}
            whileHover={{
              rotate: 0,
              scale: 1.05,
              y: -5,
              boxShadow: "0 10px 25px rgba(249,115,22,0.3)",
            }}
            whileTap={{
              scale: 0.95, // 🎬 Visual feedback when clicking
              rotate: 1,
              opacity: 0.9,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 12,
            }}
            className={`relative bg-[#111]/90 dark:bg-[#0E0E0E]/80 
                       ${service.shadow} 
                       border border-[#F59E0B]/30
                       rounded-xl w-[90%] md:w-[300px] p-3 cursor-pointer 
                       transform transition-all duration-300 select-none hover:shadow-[0_10px_35px_rgba(249,115,22,0.35)]`}
          >
            {/* Image */}
            <motion.img
              src={service.img}
              alt={service.title}
              className="rounded-xl w-full object-cover shadow-[0_8px_30px_rgba(249,115,22,0.25)]"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />

            {/* Title */}
            <p className="mt-4 font-semibold text-lg tracking-wide 
                          text-[#F59E0B] dark:text-[#FACC15]">
              {service.title}
            </p>

            {/* Masking Tape Effect */}
            <div
              className={`absolute -top-4 ${service.tapePosition} 
                          w-24 h-5 bg-[#FACC15]/80 dark:bg-[#F97316]/80 
                          rounded-sm shadow-md`}
            ></div>
          </motion.div>
        ))}
      </div>

      {/* 🎬 Description Below */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-3xl mx-auto mt-16 text-lg text-gray-700 dark:text-gray-300 
                   leading-relaxed px-6"
      >
        Every frame, brand, and artwork we craft tells a cinematic story. From
        the lens to the canvas, we merge imagination and innovation — capturing
        emotion, artistry, and experience that lingers long after the scene
        fades.
      </motion.p>

      {/* ✨ Soft Cinematic Glows */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-[#F97316]/20 dark:bg-[#F59E0B]/10 rounded-full blur-[120px]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#FACC15]/20 dark:bg-[#F97316]/15 rounded-full blur-[100px]"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
