import axiosInstance from './axiosConfig';

export const getPageContent = async () => {
  try {
    const response = await axiosInstance.get('/page-content');
    return response.data;
  } catch (error) {
    console.error('Error al obtener el contenido de la página:', error);
    throw error;
  }
};

export const createPageContent = async (content) => {
  try {
    const response = await axiosInstance.post('/page-content', { content });
    return response.data;
  } catch (error) {
    console.error('Error al crear el contenido de la página:', error);
    throw error;
  }
};

export const updatePageContent = async (id, content) => {
  try {
    const response = await axiosInstance.put(`/page-content/${id}`, { content });
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el contenido de la página:', error);
    throw error;
  }
};

export const deletePageContent = async (id) => {
  try {
    const response = await axiosInstance.delete(`/page-content/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el contenido de la página:', error);
    throw error;
  }
};