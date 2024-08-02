<script setup>
import { computed, ref } from 'vue';
import { useWeatherStore } from '@/store';

const city = ref('');
const store = useWeatherStore();

const weather = computed(() => store.data);
console.log('weather.value > ', weather.value);

const isWarm = computed(() => store.isWarm);

const fetchData = async () => {
  if (city.value) {
    try {
      await store.fetchWeatherData(city.value);
    } catch (error) {
      // Обробка помилки, наприклад, показ повідомлення користувачу
    }
  }
};

const dateBuilder = () => {
  const d = new Date();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return `${days[d.getDay()]} ${d.getDate()} ${
    months[d.getMonth()]
  } ${d.getFullYear()}`;
};
</script>

<template>
  <div class="weather-container" :class="{ warm: isWarm }">
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
<!-- <template>
  <div
    class="weather"
    :class="
      typeof weather?.main != 'undefined' && weather?.main.temp - 273.15 > 16
        ? 'warm'
        : ''
    "
  >
    <main>
      <div class="search-box">
        <input
          type="text"
          name="city"
          id="city"
          class="search-bar"
          placeholder="Search city"
          v-model="city"
          @keyup.enter="fetchData"
        />
      </div>

      <div
        class="weather-container"
        v-if="weather?.main"
        :class="{ warm: isWarm }"
      >
        <div class="weather-wrap">
          <div class="location-box">
            <div class="location">
              {{ weather?.name }}, {{ weather?.sys.country }}
            </div>
            <div class="date">{{ dateBuilder() }}</div>
          </div>
          <div class="weather-box">
            <div class="temp">
              {{ (weather?.main.temp - 273.15).toFixed(1) }} C
            </div>
            <div class="weather">{{ weather?.weather[0].main }}</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template> -->

<style scoped>
.weather-container {
  background-image: url('@/assets/bg/bg-cold.jpeg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  transition: background-image 0.5s ease;
}

.weather-container.warm {
  background-image: url('@/assets/bg/bg-warm.jpg');
}

.bg-translucent {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
