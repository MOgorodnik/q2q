<script setup>
import { computed, ref } from 'vue';
import { useWeatherStore } from '@/store';

import { dateBuilder } from '@/utils/helpers';

const city = ref('');
const store = useWeatherStore();

const weather = computed(() => store.data);

const isWarm = computed(() => store.isWarm);

const fetchData = async () => {
  if (city.value) {
    try {
      await store.fetchWeatherData(city.value);
    } catch (error) {
      console.error('Error fetching weather data for target city:', error);
    }
  }
};
</script>

<template>
  <div
    class="weather-container flex-grow-1 d-flex align-items-center bg-secondary"
    :class="{ warm: isWarm }"
  >
    <div class="container py-4">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card bg-translucent">
            <div class="card-body">
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter city name"
                  v-model="city"
                  @keyup.enter="fetchData"
                />
              </div>

              <div v-if="weather" class="text-center">
                <h2 class="mb-3">
                  {{ weather.name }}, {{ weather.sys.country }}
                </h2>
                <p class="text-muted">{{ dateBuilder() }}</p>
                <h1 class="display-4 mb-3">
                  {{ weather.main.temp.toFixed(1) }}°C
                </h1>
                <p class="lead">{{ weather.weather[0].main }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.weather-container {
  background-image: url('@/assets/images/bg/bg-cold.jpg');
  background-size: cover;
  background-position: center;
  transition: background-image 0.5s ease;
}

.weather-container.warm {
  background-image: url('@/assets/images/bg/bg-warm.webp');
  background-image: url('@/assets/images/bg/bg-warm.jpg');
}

.bg-translucent {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
