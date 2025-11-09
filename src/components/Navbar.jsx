// import React, { useState, useEffect, useContext } from "react";
// import { ThemeContext } from "../App";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ✅ Updated Menu List
//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Services", path: "/services" },
//     { name: "Portfolio", path: "/portfolio" },
//     { name: "About Us", path: "/AboutUs" },
//     { name: "Our Team", path: "/AboutTeam" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <header
//       className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
//         scrolled
//           ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-[0_6px_30px_rgba(59,130,246,0.25)]"
//           : "bg-gradient-to-r from-indigo-50/80 to-blue-50/80 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-lg shadow-[0_4px_25px_rgba(59,130,246,0.15)]"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* 🔹 Main Container */}
//         <div className="flex justify-between items-center h-16">
//           {/* 🔷 Logo */}
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex items-center"
//           >
//             <Link to="/" className="flex items-center">
//               <span className="text-2xl font-extrabold tracking-wide cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text hover:scale-105 transition-transform duration-300">
//                 EZ<span className="text-gray-900 dark:text-gray-100">Tech</span>
//               </span>
//             </Link>
//           </motion.div>

//           {/* 🔸 Right Section */}
//           <div className="flex items-center space-x-6">
//             {/* 🧭 Desktop Menu */}
//             <nav className="hidden md:flex space-x-8 font-medium items-center">
//               {navItems.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   className="relative group"
//                   onMouseEnter={() => item.name === "Services" && setShowDropdown(true)}
//                   onMouseLeave={() => item.name === "Services" && setShowDropdown(false)}
//                 >
//                   <motion.div whileHover={{ scale: 1.08, y: -2 }} transition={{ duration: 0.3 }}>
//                     <Link
//                       to={item.path}
//                       className="relative text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 transition-colors duration-300 flex items-center gap-1"
//                     >
//                       {/* ⚙️ Animated Icons for Some Links */}
//                       {item.name === "Services" && (
//                         <motion.span
//                           animate={{ y: [0, -4, 0] }}
//                           transition={{ repeat: Infinity, duration: 1.5 }}
//                         >
//                           ⚙️
//                         </motion.span>
//                       )}
//                       {item.name === "Portfolio" && (
//                         <motion.span
//                           animate={{ rotate: [0, 10, -10, 0] }}
//                           transition={{ repeat: Infinity, duration: 2 }}
//                         >
//                           💼
//                         </motion.span>
//                       )}
//                       {item.name === "About Us" && (
//                         <motion.span
//                           animate={{ y: [0, -2, 0] }}
//                           transition={{ repeat: Infinity, duration: 2 }}
//                         >
//                           🌍
//                         </motion.span>
//                       )}
//                       {item.name === "Our Team" && (
//                         <motion.span
//                           animate={{ scale: [1, 1.1, 1] }}
//                           transition={{ repeat: Infinity, duration: 2 }}
//                         >
//                           👥
//                         </motion.span>
//                       )}
//                       {item.name}
//                       <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
//                     </Link>
//                   </motion.div>

//                   {/* Dropdown for Services */}
//                   {item.name === "Services" && showDropdown && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.3 }}
//                       className="absolute top-full mt-3 left-0 bg-white dark:bg-gray-900 shadow-xl dark:shadow-[0_8px_25px_rgba(255,255,255,0.08)] rounded-xl py-3 px-5 w-56 border border-gray-100 dark:border-gray-700 backdrop-blur-lg"
//                     >
//                       <Link
//                         to="/services/film"
//                         className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-indigo-400 transition-colors duration-300"
//                       >
//                         🎬 Film Production
//                       </Link>
//                       <Link
//                         to="/services/branding"
//                         className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-indigo-400 transition-colors duration-300"
//                       >
//                         🧠 Branding
//                       </Link>
//                       <Link
//                         to="/services/art"
//                         className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-indigo-400 transition-colors duration-300"
//                       >
//                         🎨 Art Curation
//                       </Link>
//                     </motion.div>
//                   )}
//                 </motion.div>
//               ))}
//             </nav>

//             {/* 🌗 Dark Mode Toggle */}
//             <motion.button
//               onClick={toggleTheme}
//               whileTap={{ scale: 0.9 }}
//               className="p-2 rounded-full border border-blue-400 hover:bg-blue-100 dark:hover:bg-gray-700 transition duration-300 shadow-md"
//             >
//               {theme === "light" ? (
//                 <span role="img" aria-label="moon" className="text-lg">
//                   🌙
//                 </span>
//               ) : (
//                 <span role="img" aria-label="sun" className="text-lg">
//                   ☀️
//                 </span>
//               )}
//             </motion.button>

//             {/* 📱 Mobile Menu Button */}
//             <button
//               onClick={toggleMenu}
//               className="md:hidden text-gray-700 dark:text-gray-200 hover:text-blue-600 focus:outline-none transition-transform duration-300"
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
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </motion.svg>
//             </button>
//           </div>
//         </div>

//         {/* 📱 Mobile Menu */}
//         <AnimatePresence>
//           {menuOpen && (
//             <motion.nav
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 mt-2 rounded-b-lg shadow-lg"
//             >
//               {navItems.map((item, index) => (
//                 <Link
//                   key={index}
//                   to={item.path}
//                   onClick={() => setMenuOpen(false)}
//                   className="block px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-indigo-400 font-medium transition-all duration-200"
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </motion.nav>
//           )}
//         </AnimatePresence>
//       </div>
//     </header>
//   );
// }


import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../App";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About Us", path: "/AboutUs" },
    { name: "Our Team", path: "/AboutTeam" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? // When scrolled: slightly darker glass
            "bg-white/10 dark:bg-black/20 backdrop-blur-xl shadow-[0_4px_25px_rgba(249,115,22,0.25)] border-b border-[#F59E0B]/20"
          : // Default: transparent glass with gradient tint
            "bg-gradient-to-r from-[#ffffff]/20 via-[#fef9f5]/10 to-[#fff]/10 dark:from-[#0a0a0a]/50 dark:to-[#1a1a1a]/50 backdrop-blur-2xl border-b border-[#F59E0B]/10 shadow-[0_2px_15px_rgba(249,115,22,0.15)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🔹 Main Container */}
        <div className="flex justify-between items-center h-16">
          {/* 🎥 Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center">
              <span
                className="text-2xl font-extrabold tracking-wide cursor-pointer 
                           bg-gradient-to-r from-[#F97316] via-[#F59E0B] to-[#FACC15] 
                           text-transparent bg-clip-text hover:scale-110 transition-transform duration-300"
              >
                EZ<span className="text-gray-800 dark:text-gray-50">Film</span>
              </span>
            </Link>
          </motion.div>

          {/* 🔸 Right Section */}
          <div className="flex items-center space-x-6">
            {/* 🧭 Desktop Menu */}
            <nav className="hidden md:flex space-x-8 font-medium items-center">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  onMouseEnter={() =>
                    item.name === "Services" && setShowDropdown(true)
                  }
                  onMouseLeave={() =>
                    item.name === "Services" && setShowDropdown(false)
                  }
                >
                  <motion.div
                    whileHover={{ scale: 1.08, y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      className="relative text-gray-800 dark:text-gray-200 hover:text-[#F59E0B] 
                                 transition-colors duration-300 flex items-center gap-1"
                    >
                      {item.name}
                      <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-[#F97316] to-[#FACC15] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </motion.div>

                  {/* 🎥 Dropdown for Services */}
                  {item.name === "Services" && showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full mt-3 left-0 
                                 bg-white/70 dark:bg-[#0d0d0d]/80 backdrop-blur-lg
                                 shadow-xl rounded-xl py-3 px-5 w-56 
                                 border border-[#F59E0B]/30"
                    >
                      <Link
                        to="/services/film"
                        className="block py-2 text-gray-800 dark:text-gray-300 hover:text-[#F59E0B] transition-colors duration-300"
                      >
                        🎬 Film Production
                      </Link>
                      <Link
                        to="/services/branding"
                        className="block py-2 text-gray-800 dark:text-gray-300 hover:text-[#F59E0B] transition-colors duration-300"
                      >
                        🧠 Branding
                      </Link>
                      <Link
                        to="/services/art"
                        className="block py-2 text-gray-800 dark:text-gray-300 hover:text-[#F59E0B] transition-colors duration-300"
                      >
                        🎨 Art Curation
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* 🌗 Dark Mode Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full border border-[#F59E0B]/50 
                         bg-white/10 dark:bg-black/20 backdrop-blur-md
                         hover:bg-[#F97316]/20 dark:hover:bg-[#F59E0B]/20 
                         transition duration-300 shadow-md"
            >
              {theme === "light" ? (
                <span role="img" aria-label="moon" className="text-lg">
                  🌙
                </span>
              ) : (
                <span
                  role="img"
                  aria-label="sun"
                  className="text-lg text-[#FACC15]"
                >
                  ☀️
                </span>
              )}
            </motion.button>

            {/* 📱 Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-800 dark:text-gray-200 hover:text-[#F59E0B] focus:outline-none transition-transform duration-300"
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
              className="md:hidden bg-white/70 dark:bg-[#0d0d0d]/80 backdrop-blur-md border-t border-[#F59E0B]/30 mt-2 rounded-b-lg shadow-lg"
            >
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="block px-5 py-3 text-gray-800 dark:text-gray-200 hover:bg-[#fff1e6]/40 dark:hover:bg-[#1f1f1f] hover:text-[#F59E0B] 
                             font-medium transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

