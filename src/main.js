import './assets/styles/main.css';

import { createApp } from 'vue';
import App from '@/App.vue';
import { createPinia } from 'pinia';

import router from '@/router/index';

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app');

const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  });
};

Promise.all([
  preloadImage('/src/assets/bg/bg-cold.jpg'),
  preloadImage('/src/assets/bg/bg-warm.jpg'),
  preloadImage('/src/assets/weather-1.jpeg'),
]).then(() => {
  console.log('All images preloaded');
});
