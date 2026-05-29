import React, { useState, useEffect } from "react";
import { FaKiwiBird, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useDarkMode } from "../../context/DarkModeContext";
import "./navbar.css";

const NAV_ITEMS = [
  { label: "Home",       id: "Home" },
  { label: "Experience", id: "Experience" },
  { label: "Projects",   id: "Projects" },
  { label: "About",      id: "About" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen]       = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <button className="navbar-logo" onClick={() => handleScroll("Home")} aria-label="Go to top">
          <FaKiwiBird size={26} />
          <span className="navbar-wordmark">DT</span>
        </button>

        {/* Desktop links */}
        <ul className="nav-menu">
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={id} className="nav-item">
              <span className="nav-links" onClick={() => handleScroll(id)}>
                {label}
                <span className="nav-underline" />
              </span>
            </li>
          ))}
          <li className="nav-item nav-item--toggle">
            <button
              className="dark-mode-toggle"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>
          </li>
        </ul>

        {/* Mobile burger */}
        <button className="menu-icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${isOpen ? " mobile-drawer--open" : ""}`}>
        <ul className="mobile-menu">
          {NAV_ITEMS.map(({ label, id }, i) => (
            <li
              key={id}
              className="mobile-item"
              style={{ animationDelay: `${i * 0.06}s` }}
              onClick={() => handleScroll(id)}
            >
              <span className="mobile-index">0{i + 1}</span>
              {label}
            </li>
          ))}
          <li className="mobile-item mobile-item--toggle" style={{ animationDelay: "0.24s" }}>
            <button className="dark-mode-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
              {isDarkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
              <span>{isDarkMode ? "Light mode" : "Dark mode"}</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;