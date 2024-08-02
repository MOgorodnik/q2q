<script setup>
import navPages from "@/router/routes.js";

</script>

<template>
  <nav class="navbar navbar-expand-sm bg-body-tertiary">
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="100"
      height="100"
    />
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
</template>
