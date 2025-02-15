import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

const Section = ({ secciones }) => {
  return (
    <section id="home">
      <div className="container">
        {secciones.map((seccion) => (
          <div key={seccion._id}>
            <h3>{seccion.nombre}</h3>
            {Object.entries(seccion.contenido).map(([key, value]) => (
              <p key={key}><strong>{key}:</strong> {value}</p>
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