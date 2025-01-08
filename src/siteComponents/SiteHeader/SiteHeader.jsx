import React from 'react';
import { Link } from 'react-router-dom';
import './SiteHeader.css';

const SiteHeader = () => {
  return (
    <header className="site-header">
      <h1 className="site-title">aXsEduSites</h1>
      <nav className="site-nav">
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