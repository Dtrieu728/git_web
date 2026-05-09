// src/components/Navbar.tsx
import React, { useState } from "react";
import { FaBars, FaKiwiBird, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useDarkMode } from "../../context/DarkModeContext";
import "./navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <FaKiwiBird size={50} />
        </div>
        <div className="menu-icon" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <span onClick={() => handleScroll("Home")} className="nav-links">
              Home
            </span>
          </li>
          <li className="nav-item">
            <span
              onClick={() => handleScroll("Experience")}
              className="nav-links"
            >
              Experience
            </span>
          </li>
          <li className="nav-item">
            <span
              onClick={() => handleScroll("Projects")}
              className="nav-links"
            >
              Projects
            </span>
          </li>
          <li className="nav-item">
            <span onClick={() => handleScroll("About")} className="nav-links">
              About
            </span>
          </li>
          <li className="nav-item">
            <button
              className="dark-mode-toggle"
              onClick={toggleDarkMode}
              title={isDarkMode ? "Light Mode" : "Dark Mode"}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
