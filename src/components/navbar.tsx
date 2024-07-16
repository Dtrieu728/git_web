// src/components/Navbar.tsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css'; 

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <h1>Welcome</h1>
                </div>
                <div className="menu-icon" onClick={toggleNavbar}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="#home" className="nav-links">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-links">
                            Services
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-links">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-links">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
