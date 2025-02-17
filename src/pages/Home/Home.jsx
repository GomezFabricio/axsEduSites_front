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
    <div className="home-container">
      <h2 className="home-title">Potencia tu presencia online</h2>
      <div className="section-container">
        {secciones.length > 0 && <Section secciones={secciones} />}
      </div>
    </div>
  );
};

export default Home;