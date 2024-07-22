// src/components/Navbar.tsx
import React, { useState } from 'react';
import { FaBars, FaKiwiBird, FaTimes } from 'react-icons/fa';
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
                    <FaKiwiBird></FaKiwiBird>
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
                        <a href="#experience" className="nav-links">
                            Experience
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#prpjects" className="nav-links">
                            Projects
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
