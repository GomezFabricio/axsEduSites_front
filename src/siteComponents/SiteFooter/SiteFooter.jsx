import React from 'react';
import './SiteFooter.css';

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; 2024 aXsEduSites. Todos los derechos reservados.</p>
        <nav className="footer-nav">
          <a href="/privacy">Política de Privacidad</a>
          <a href="/terms">Términos de Servicio</a>
          <a href="/contact">Contacto</a>
        </nav>
      </div>
    </footer>
  );
};

export default SiteFooter;