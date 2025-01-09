import axiosInstance from './axiosConfig';

export const getSecciones = async () => {
  try {
    const response = await axiosInstance.get('/secciones');
    return response.data;
  } catch (error) {
    console.error('Error al obtener las secciones:', error);
    throw error;
  }
};