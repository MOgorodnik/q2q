import axios from 'axios';
import { BASE_URL_OWM, ENDPOINT } from './apiEndpoints';

const weatherAppInstance = axios.create({
  baseURL: BASE_URL_OWM,
});

const getWeatherData = async (city) => {
  try {
    const response = await weatherAppInstance.get(ENDPOINT.WEATHER, {
      params: {
        q: city,
        appid: import.meta.env.VITE_API_KEY_OWM,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export { getWeatherData };
