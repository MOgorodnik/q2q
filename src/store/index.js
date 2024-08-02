import { defineStore } from 'pinia';
import { getWeatherData } from '@/services/api';

export const useWeatherStore = defineStore({
  id: 'weather',
  state: () => ({
    city: '',
    data: null,
  }),
  getters: {
    isWarm: (state) => state.data && state.data.main.temp > 16,
  },
  actions: {
    async fetchWeatherData(city) {
      try {
        const data = await getWeatherData(city);
        this.data = data;
        this.city = city;
      } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
      }
    },
  },
});