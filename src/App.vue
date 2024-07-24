<script setup>
import { computed, onMounted, ref } from "vue";

import { getAllPhotos, getSlicePhotos } from "@/api/libs/axios/fetchData.js";

import Loader from './components/Loader.vue'

let loading = ref(false);
let error = ref(false);
let currentPage = ref(1);
let perPage = ref(15);
let photosCount = ref({});
let sliceOfPhotos = ref({});

const changePagehandler = page => {
  currentPage.value = page;
}

const pageCount = computed(() => Math.ceil(photosCount.value / perPage.value));

onMounted(async () => {
  loading.value = true;
  try {
    photosCount.value = (await getAllPhotos()).length;

    sliceOfPhotos.value = await getSlicePhotos(currentPage.value, perPage.value);
    
    console.log(photosCount.value, sliceOfPhotos.value);
  } catch (err) {
    console.error('Failed to fetch products:', err);
    error.value = 'Failed to load products. Please try again later.'
  }
  finally {
    loading.value = false;
  }
});
</script>

<template>
  <Loader v-if="loading" />
  <div v-else>
    <main>
      main
    </main>
  </div>
</template>