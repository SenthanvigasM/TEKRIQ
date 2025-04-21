import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./assets/logo-r.png";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className="nav"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <div className="nav-logo">
        <img src={Logo} alt="TEKRIQ Logo" />
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#intro" onClick={toggleMenu}>Home</a>
        <a href="#services" onClick={toggleMenu}>Services</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "rotate1" : ""}`} />
        <div className={`bar ${isOpen ? "fade" : ""}`} />
        <div className={`bar ${isOpen ? "rotate2" : ""}`} />
      </div>
    </motion.nav>
  );
}

export default Navbar;
