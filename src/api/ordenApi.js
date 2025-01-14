import axiosInstance from './axiosConfig';

export const getOrden = async () => {
  try {
    const response = await axiosInstance.get('/orden');
    console.log('Orden:', response.data); // Agregar console.log
    return response.data;
  } catch (error) {
    console.error('Error al obtener el orden:', error);
    throw error;
  }
};