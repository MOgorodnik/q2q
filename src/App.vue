<script setup>
import { useWeatherStore } from '@/store';
import Nav from './components/Nav.vue';
import Loader from './components/Loader.vue';

const store = useWeatherStore();
</script>

<template>
  <header>
    <Nav />
  </header>

  <main class="d-flex flex-grow-1">
    <RouterView />
  </main>

  <Loader v-if="store.loading" />
</template>
