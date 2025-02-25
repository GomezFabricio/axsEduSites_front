import React, { useEffect, useState } from 'react';
import { getPageContent } from '../../api/pageContentApi';
import Seccion from '../../components/Seccion/Seccion';
import Equipo from '../../components/Equipo/Equipo';
import Servicios from '../../components/Servicios/Servicios';
import TrabajosRealizados from '../../components/TrabajosRealizados/TrabajosRealizados';
import './Home.css';

const Home = () => {
  const [pageContent, setPageContent] = useState([]);

  useEffect(() => {
    const fetchPageContent = async () => {
      try {
        const data = await getPageContent();
        console.log('Page Content:', data);
        setPageContent(data);
      } catch (error) {
        console.error('Error al obtener el contenido de la página:', error);
      }
    };

    fetchPageContent();
  }, []);

  return (
    <div className="home-container">
      <h2 className="home-title">Soluciones web para instituciones educativas</h2>
      <div className="section-container">
        {pageContent.map((content) => {
          if (content.type === 'section') {
            return <Seccion key={content.id} secciones={[content]} />;
          } else if (content.type === 'services') {
            return <Servicios key={content.id} servicios={content.items} />;
          } else if (content.type === 'projects') {
            return <TrabajosRealizados key={content.id} trabajos={content.items} />;
          } else if (content.type === 'equipo') {
            return <Equipo key={content.id} equipo={content.items} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Home;