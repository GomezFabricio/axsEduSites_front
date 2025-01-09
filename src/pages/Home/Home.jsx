import React, { useEffect, useState } from 'react';
import { getSecciones } from '../../api/sectionApi';

const HomeSection = () => {
  const [secciones, setSecciones] = useState([]);

  useEffect(() => {
    const fetchSecciones = async () => {
      try {
        const data = await getSecciones();
        setSecciones(data);
      } catch (error) {
        console.error('Error al obtener las secciones:', error);
      }
    };

    fetchSecciones();
  }, []);

  return (
    <section id="home">
      <h2>Bienvenido a aXsEduSites</h2>

      <div>
        {secciones.map((seccion) => (
          <div key={seccion._id}>
            <h3>{seccion.nombre}</h3>
            <p>{seccion.contenido.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeSection;