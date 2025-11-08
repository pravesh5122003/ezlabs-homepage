import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar main container */}
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-orange-600 tracking-wide">
              EZ<span className="text-gray-800">Labs</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-600 transition">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-orange-600 transition">
              Services
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-orange-600 transition">
              Portfolio
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-orange-600 focus:outline-none"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu items */}
        {menuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 mt-2">
            <a
              href="#home"
              className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
            >
              Home
            </a>
            <a
              href="#services"
              className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
