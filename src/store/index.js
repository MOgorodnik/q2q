import { defineStore } from 'pinia';
import { getWeatherData } from '@/services/api';

export const useWeatherStore = defineStore({
  id: 'weather',
  state: () => ({
    city: '',
    data: null,
    loading: false,
  }),
  actions: {
    async fetchWeatherData(city) {
      try {
        this.loading = true;
        const data = await getWeatherData(city);
        this.data = data;
        this.city = city;
      } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
      } finally {
        this.loading = false;
      }
    },
  },
  getters: {
    isWarm: (state) => state.data && state.data.main.temp > 16,
  },
});