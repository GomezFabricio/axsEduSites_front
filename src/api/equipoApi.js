import axiosInstance from './axiosConfig';

export const getEquipo = async () => {
  try {
    const response = await axiosInstance.get('/equipo');
    console.log('Equipo:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el equipo:', error);
    throw error;
  }
};