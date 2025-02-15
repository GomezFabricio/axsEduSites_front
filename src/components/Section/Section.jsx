import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

const Section = ({ secciones }) => {
  return (
    <section id="home">
      <div className="container">
        {secciones.map((seccion) => (
          <div key={seccion._id}>
            {Object.entries(seccion.contenido).map(([key, value]) => (
              key === 'titulo' ? <h3 key={key}>{value}</h3> : <p key={key}>{value}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

Section.propTypes = {
  secciones: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
      contenido: PropTypes.objectOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Section;