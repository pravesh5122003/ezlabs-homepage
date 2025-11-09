import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function PageTransitionWrapper({ children }) {
  const location = useLocation();

  const variants = {
    initial: {
      opacity: 0,
      y: 30,
      scale: 0.98,
      filter: "blur(5px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    // exit: {
    //   opacity: 0,
    //   y: -20,
    //   scale: 0.98,
    //   filter: "blur(5px)",
    //   transition: {
    //     duration: 0.4,
    //     ease: "easeIn",
    //   },
    // },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
