import axiosInstance from './axiosConfig';

export const getServicios = async () => {
  try {
    const response = await axiosInstance.get('/servicios');
    console.log('Servicios:', response.data); // Agregar console.log
    return response.data;
  } catch (error) {
    console.error('Error al obtener los servicios:', error);
    throw error;
  }
};