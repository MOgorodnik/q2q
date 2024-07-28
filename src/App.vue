<script setup>
import { ref, computed } from "vue";
import GalleryAxios from "./components/GalleryAxios.vue";
import GalleryFetch from "./components/GalleryFetch.vue";
import Paging from "@/components/Paging.vue";

const currentPage = ref(1);
const perPage = ref(15);
const photosCount = ref(0);

const changePageHandler = (page) => {
  currentPage.value = page;
}

const pageCount = computed(() => {
  return Math.ceil(photosCount.value / perPage.value);
});

const updatePhotosCount = (count) => {
  photosCount.value = count;
}
</script>

<template>
  <GalleryFetch :limit="perPage" :page="currentPage" @update-total="updatePhotosCount" />
  <!-- <GalleryAxios :limit="perPage" :page="currentPage" @update-total="updatePhotosCount" /> -->
  <Paging :on-change-page="changePageHandler" :current-page="currentPage" :page-count="pageCount" />
</template>