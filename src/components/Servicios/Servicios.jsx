import React from 'react';
import PropTypes from 'prop-types';
import './Servicios.css';

const Servicios = ({ servicios }) => {
  return (
    <section className="servicios">
      <div className="container">
        <h3>Servicios</h3>
        <div className="servicios-list">
          {servicios.map((servicio) => (
            <div key={servicio._id} className="servicio-item">
              <h4>{servicio.nombre}</h4>
              <p>{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Servicios.propTypes = {
  servicios: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Servicios;