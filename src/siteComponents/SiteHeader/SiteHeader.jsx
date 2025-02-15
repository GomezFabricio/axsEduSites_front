import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SiteHeader.css';
import { FaChevronDown } from 'react-icons/fa';

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="site-header">
      <h1 className="site-title">aXsEduSites</h1>
      <div className={`menu-toggle ${menuOpen ? 'show' : ''}`} onClick={toggleMenu}>
        Menu <FaChevronDown />
      </div>
      <nav className={`site-nav ${menuOpen ? 'show' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre Nosotros</Link>
        <Link to="/services">Servicios</Link>
        <Link to="/projects">Trabajos Realizados</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
    </header>
  );
};

export default SiteHeader;