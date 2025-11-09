import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import filmImg from "../assets/services/film.png";
import brandingImg from "../assets/services/Branding.png";
import artImg from "../assets/services/art.png";

export default function Services() {
  const navigate = useNavigate(); // ✅ For page navigation

  // Data for easy management
  const services = [
    {
      title: "Film Production",
      img: filmImg,
      link: "/services/branding",
      rotation: -8,
      tapePosition: "left-10 rotate-[-5deg]",
      shadow: "shadow-[0_10px_30px_rgba(59,130,246,0.25)]",
    },
    {
      title: "Branding",
      img: brandingImg,
      link: "/services/branding",
      rotation: 0,
      tapePosition: "left-12 rotate-[3deg]",
      shadow: "shadow-[0_10px_30px_rgba(79,70,229,0.25)]",
    },
    {
      title: "Art Curation",
      img: artImg,
      link: "/services/art",
      rotation: 8,
      tapePosition: "right-10 rotate-[8deg]",
      shadow: "shadow-[0_10px_30px_rgba(99,102,241,0.25)]",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-blue-50 via-indigo-50 to-white 
                 dark:from-gray-900 dark:via-gray-800 dark:to-black text-center"
    >
      {/* ✨ Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-extrabold mb-12 
                   text-gray-900 dark:text-gray-100 tracking-tight"
      >
        The storyboard reveals the breadth of our craft.
      </motion.h2>

      {/* 🎞️ Service Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            onClick={() => navigate(service.link)} // ✅ Navigate to specific page
            initial={{ rotate: service.rotation, y: 10 }}
            whileHover={{
              rotate: 0,
              scale: 1.05,
              y: -5,
              boxShadow: "0 10px 25px rgba(59,130,246,0.3)",
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 12,
            }}
            className={`relative bg-white dark:bg-gray-900 ${service.shadow}
                       rounded-xl w-[90%] md:w-[300px] p-3 cursor-pointer 
                       transform transition-all duration-300 select-none`}
          >
            {/* Image */}
            <img
              src={service.img}
              alt={service.title}
              className="rounded-xl w-full object-cover"
            />

            {/* Title */}
            <p className="mt-3 font-medium text-gray-800 dark:text-gray-200">
              {service.title}
            </p>

            {/* Masking Tape */}
            <div
              className={`absolute -top-4 ${service.tapePosition} w-24 h-5 bg-yellow-100 
                          opacity-80 rounded-sm shadow-sm`}
            ></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
