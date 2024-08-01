<script setup>
import { onMounted } from 'vue';
import { getWeatherData } from '@/services/api';

import navPages from "@/router/routes.js";

onMounted(() => {
  console.log('onMounted App.vue');

  getWeatherData('kyiv');
});
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
  </header>
  <nav class="navbar navbar-expand-sm bg-body-tertiary">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="page in navPages" :key="page.path">
            <RouterLink class="nav-link" :to="page.path">{{
              page.title
            }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <hr />
  <main>
    <RouterView />
  </main>
</template>
