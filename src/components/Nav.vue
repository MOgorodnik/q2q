<script setup>
import { computed } from 'vue';
import pages from '@/router/routes.js';

const navPages = computed(() =>
  pages.filter((page) => !['/404', '/:pathMatch(.*)*'].includes(page.path))
);
</script>

<template>
  <nav class="navbar navbar-expand-sm bg-body-tertiary">
    <div class="container">
      <span class="navbar-brand" href="#">Weather App</span>
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
          <li class="nav-item mt-2 mt-sm-auto" v-for="page in navPages" :key="page.path">
            <RouterLink class="nav-link px-3" :to="page.path">{{
              page.title
            }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
