<script setup lang="ts">
import { computed } from 'vue';

import pages from "./router/index";

// Assuming pages is defined or imported here
const navPages = computed(() => pages.filter(page => page.path !== '/products/:id'));
</script>

<template>
  <h1>Hello App!</h1>

  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <hr>
  <nav class="navbar navbar-expand-sm bg-body-tertiary">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

        <ul class="navbar-nav">
          <li class="nav-item" v-for="page in navPages" :key="page.path">
            <RouterLink class="nav-link" :to="page.path">{{ page.title }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <hr>
  <main>
    <RouterView />
  </main>
</template>