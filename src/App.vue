<script setup lang="ts">
import { onMounted } from 'vue';
import { getWeatherData } from "@/services/api";

import HelloWorld from './components/HelloWorld.vue'

onMounted(()=>{
  console.log('onMounted App.vue');
  
  getWeatherData('kyiv')
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <HelloWorld msg="Hoooooray!!!" />
  </main>
</template>