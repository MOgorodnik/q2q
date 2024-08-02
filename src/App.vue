<script setup>
import { onMounted } from 'vue';
import Nav from './components/Nav.vue';

onMounted(() => {
  console.log('onMounted App.vue');

  // getWeatherData('kyiv');
});
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <header>
      <Nav />
    </header>
    <hr class="m-0" />
    <main class="flex-grow-1">
      <RouterView />
    </main>
    <footer class="bg-light text-center py-3">
      <p class="mb-0">&copy; 2024 Weather App</p>
    </footer>
  </div>
</template>
