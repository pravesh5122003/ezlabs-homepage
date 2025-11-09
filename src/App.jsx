import React, { useEffect, useState, createContext } from "react";
import { motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutTeam from "./components/AboutTeam";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import PageTransitionWrapper from "./components/PageTransitionWrapper"; // 👈 Add this

import ServiceFilm from "./components/ServiceFilm";
import ServiceBranding from "./components/ServiceBranding";
import ServiceArt from "./components/ServiceArt";


// 🌗 Create Theme Context
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`min-h-screen font-poppins scroll-smooth transition-colors duration-700 ease-in-out ${
          theme === "dark"
            ? "bg-black text-white"
            : "bg-white text-gray-900"
        }`}
      >
        {/* 🔝 Navbar */}
        <Navbar />

        {/* 🌟 Page Transition Wrapper */}
        <PageTransitionWrapper>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/AboutTeam" element={<AboutTeam />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/services/film" element={<ServiceFilm />} />
            <Route path="/services/branding" element={<ServiceBranding />} />
            <Route path="/services/art" element={<ServiceArt />} />

          </Routes>
        </PageTransitionWrapper>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
