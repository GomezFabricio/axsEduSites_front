import React from 'react';
import PropTypes from 'prop-types';
import './Equipo.css';

const Equipo = ({ equipo }) => {
  return (
    <section className="equipo">
      <div className="container">
        <h3>Equipo</h3>
        <div className="equipo-list">
          {equipo.map((miembro) => (
            <div key={miembro._id} className="equipo-item">
              <img src={miembro.foto} alt={miembro.nombre} className="equipo-foto" />
              <h4>{miembro.nombre}</h4>
              <p>{miembro.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Equipo.propTypes = {
  equipo: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
      foto: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Equipo;