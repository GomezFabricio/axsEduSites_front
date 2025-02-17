import React from 'react';
import './SiteFooter.css';

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; 2025 aXsEduSites. Todos los derechos reservados.</p>
        <nav className="footer-nav">
          <a href="/privacy">Política de Privacidad</a>
          <a href="/terms">Términos y Condiciones</a>
          <a href="/contact">Contáctanos</a>
        </nav>
      </div>
    </footer>
  );
};

export default SiteFooter;