import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../App";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // 🌫 Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-[0_6px_30px_rgba(59,130,246,0.25)]"
          : "bg-gradient-to-r from-indigo-50/80 to-blue-50/80 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-lg shadow-[0_4px_25px_rgba(59,130,246,0.15)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar Container */}
        <div className="flex justify-between items-center h-16">
          {/* 🔷 Brand Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <span className="text-2xl font-extrabold tracking-wide cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text hover:scale-105 transition-transform duration-300">
              EZ<span className="text-gray-900 dark:text-gray-100">Tech</span>
            </span>
          </motion.div>

          {/* 🔹 Right Section (Links + Toggle + Menu Button) */}
          <div className="flex items-center space-x-6">
            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8 font-medium">
              {["Home", "Services", "Portfolio", "Contact"].map((item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 transition-colors duration-300 group"
                  whileHover={{ scale: 1.08 }}
                >
                  {item}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </nav>

            {/* 🌗 Dark Mode Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full border border-blue-400 hover:bg-blue-100 dark:hover:bg-gray-700 transition duration-300 shadow-md"
            >
              {theme === "light" ? (
                <span role="img" aria-label="moon" className="text-lg">🌙</span>
              ) : (
                <span role="img" aria-label="sun" className="text-lg">☀️</span>
              )}
            </motion.button>

            {/* 📱 Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 dark:text-gray-200 hover:text-blue-600 focus:outline-none transition-transform duration-300"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
                animate={{ rotate: menuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </button>
          </div>
        </div>

        {/* 📱 Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 mt-2 rounded-b-lg shadow-lg"
            >
              {["Home", "Services", "Portfolio", "Contact"].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-indigo-400 font-medium transition-all duration-200"
                >
                  {item}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
