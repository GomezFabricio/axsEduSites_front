import axiosInstance from './axiosConfig';

export const getTrabajosRealizados = async () => {
  try {
    const response = await axiosInstance.get('/trabajos-realizados');
    return response.data;
  } catch (error) {
    console.error('Error al obtener los trabajos realizados:', error);
    throw error;
  }
};