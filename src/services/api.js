import axios from "axios";
import { BASE_URL_OWM, ENDPOINT } from "./apiEndpoints";

const weatherAppInstance = axios.create({
  baseURL: BASE_URL_OWM,
})

const getWeatherData = (city) => {
  console.log('api.js - ', city, import.meta.env.VITE_API_KEY_OWM);
  return weatherAppInstance.get(ENDPOINT.WEATHER, {
    params: {
      q: city,
      appid: import.meta.env.VITE_API_KEY_OWM,
      units: 'metric'
    },
  })
};

export {
  getWeatherData
}