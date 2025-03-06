import React from 'react';
import PropTypes from 'prop-types';
import './TrabajosRealizados.css';

const TrabajosRealizados = ({ trabajos }) => {
  return (
    <section className="trabajos-realizados">
      <div className="container">
        <h3>Trabajos Realizados</h3>
        <div className="trabajos-list">
          {trabajos.map((trabajo) => (
            <div key={trabajo._id} className="trabajo-item">
              <h4>{trabajo.titulo}</h4>
              <p>{trabajo.descripcion}</p>
              {trabajo.imagenes.map((imagen, index) => (
                <img key={index} src={imagen} alt={`Trabajo ${index + 1}`} className="trabajo-imagen" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

TrabajosRealizados.propTypes = {
  trabajos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      titulo: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      imagenes: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default TrabajosRealizados;