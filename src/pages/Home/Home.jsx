import React, { useEffect, useState } from 'react';
import { getSecciones } from '../../api/sectionApi';
import Section from '../../components/Section/Section';
import './Home.css';

const Home = () => {
  const [secciones, setSecciones] = useState([]);

  useEffect(() => {
    const fetchSecciones = async () => {
      try {
        const data = await getSecciones();
        console.log('Secciones:', data);
        setSecciones(data);
      } catch (error) {
        console.error('Error al obtener las secciones:', error);
      }
    };

    fetchSecciones();
  }, []);

  return (
    <div>
      <h2>Bienvenido a aXsEduSites</h2>
      {secciones.length > 0 && <Section secciones={secciones} />}
    </div>
  );
};

export default Home;