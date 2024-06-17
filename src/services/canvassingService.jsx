// src/services/canvassingService.js
import axios from 'axios';

const API_BASE_URL = 'https://api.canvassing-app.com';

export const getCanvassingRoutes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/routes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching canvassing routes:', error);
    return [];
  }
};