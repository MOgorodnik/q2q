import axios from "axios";
import { BASE_URL_OWM, ENDPOINT } from "./apiEndpoints";

const weatherAppInstance = axios.create({
  baseURL: BASE_URL_OWM,
})

const getWeatherData = (city) => {
  console.log(city, import.meta.env.VITE_API_KEY_OWM);
  // return weatherAppInstance.get(ENDPOINT.WEATHER, {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
    params: {
      q: city,
      appid: '4ac60215c6d8eb479641a739af08312d' || import.meta.env.VITE_API_KEY_OWM,
      units: 'metric'
    },
  })
};

export {
  getWeatherData
}