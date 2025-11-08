// import React, { useState, useEffect, useContext } from "react";
// import { ThemeContext } from "../App"; // ✅ Access theme & toggle
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // ✅ Get theme + toggle from context
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   // Add shadow effect on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) setScrolled(true);
//       else setScrolled(false);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
//           : "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-[0_6px_25px_rgba(0,0,0,0.18)]"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Navbar main container */}
//         <div className="flex justify-between items-center h-16">
          
//           {/* Logo */}
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex items-center"
//           >
//             <span className="text-2xl font-extrabold text-orange-600 tracking-wide cursor-pointer hover:scale-105 transition-transform duration-300">
//               EZ<span className="text-gray-800 dark:text-gray-100">Labs</span>
//             </span>
//           </motion.div>

//           {/* Desktop Menu */}
//           <nav className="hidden md:flex space-x-8 font-medium">
//             {["Home", "Services", "Portfolio", "Contact"].map((item, index) => (
//               <motion.a
//                 key={index}
//                 href={`#${item.toLowerCase()}`}
//                 className="relative text-gray-700 dark:text-gray-200 hover:text-orange-600 transition-colors duration-300"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 {item}
//                 <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full hover:w-full"></span>
//               </motion.a>
//             ))}
//           </nav>

//           {/* Right-side actions (Menu + Dark Mode Toggle) */}
//           <div className="flex items-center space-x-3">
//             {/* 🌗 Dark Mode Toggle */}
//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-full border border-orange-500 hover:bg-orange-100 dark:hover:bg-gray-700 transition duration-300"
//             >
//               {theme === "light" ? (
//                 <span role="img" aria-label="moon" className="text-lg">🌙</span>
//               ) : (
//                 <span role="img" aria-label="sun" className="text-lg">☀️</span>
//               )}
//             </button>

//             {/* Mobile menu button */}
//             <button
//               onClick={toggleMenu}
//               className="md:hidden text-gray-700 dark:text-gray-200 hover:text-orange-600 focus:outline-none transition-transform duration-300"
//             >
//               <motion.svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 stroke="currentColor"
//                 className="w-7 h-7"
//                 animate={{ rotate: menuOpen ? 180 : 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {menuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </motion.svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu items with animation */}
//         <AnimatePresence>
//           {menuOpen && (
//             <motion.nav
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 mt-2 rounded-b-lg shadow-sm"
//             >
//               {["Home", "Services", "Portfolio", "Contact"].map((item, index) => (
//                 <a
//                   key={index}
//                   href={`#${item.toLowerCase()}`}
//                   onClick={() => setMenuOpen(false)}
//                   className="block px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-600 font-medium transition-all duration-200"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </motion.nav>
//           )}
//         </AnimatePresence>
//       </div>
//     </header>
//   );
// }


import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../App"; // ✅ import theme context
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext); // ✅ Access theme + toggle

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // ✅ Scroll shadow logic
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
          : "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-[0_6px_25px_rgba(0,0,0,0.18)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar Container */}
        <div className="flex justify-between items-center h-16">
          
          {/* Logo (Left Side) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <span className="text-2xl font-extrabold text-orange-600 tracking-wide cursor-pointer hover:scale-105 transition-transform duration-300">
              EZ<span className="text-gray-800 dark:text-gray-100">Labs</span>
            </span>
          </motion.div>

          {/* ✅ Right Section (Nav Links + Toggle + Menu Icon) */}
          <div className="flex items-center space-x-6">
            {/* Desktop Menu (Right-aligned) */}
            <nav className="hidden md:flex space-x-8 font-medium">
              {["Home", "Services", "Portfolio", "Contact"].map((item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-700 dark:text-gray-200 hover:text-orange-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full hover:w-full"></span>
                </motion.a>
              ))}
            </nav>

            {/* 🌗 Dark Mode Toggle (Last item on right) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-orange-500 hover:bg-orange-100 dark:hover:bg-gray-700 transition duration-300"
            >
              {theme === "light" ? (
                <span role="img" aria-label="moon" className="text-lg">🌙</span>
              ) : (
                <span role="img" aria-label="sun" className="text-lg">☀️</span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 dark:text-gray-200 hover:text-orange-600 focus:outline-none transition-transform duration-300"
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

        {/* Mobile Menu (Slide-down animation) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 mt-2 rounded-b-lg shadow-sm"
            >
              {["Home", "Services", "Portfolio", "Contact"].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-600 font-medium transition-all duration-200"
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
