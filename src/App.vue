<!-- src\App.vue -->
<script setup>
import { ref, computed } from 'vue';
import GalleryAxios from '@/components/GalleryAxios.vue';
import GalleryFetch from '@/components/GalleryFetch.vue';
import Paging from '@/components/Paging.vue';

const currentPageNumber = ref(1);
const photosPerPage = ref(15);
const totalPhotosCount = ref(0);
const hasLoadingError = ref(false);
const isGalleryLoading = ref(false);

const totalPageCount = computed(() =>
  Math.ceil(totalPhotosCount.value / photosPerPage.value)
);

const handlePageChange = (newPage) => {
  currentPageNumber.value = newPage;
};

const updateTotalPhotosCount = (count) => {
  totalPhotosCount.value = count;
};

const setGalleryLoadingState = (isLoading) => {
  isGalleryLoading.value = isLoading;
};
</script>

<template>
  <!-- <GalleryFetch
    :photos-per-page="photosPerPage"
    :page-number="currentPageNumber"
    @update-total-count="updateTotalPhotosCount"
    @loading-state-change="setGalleryLoadingState"
    @loading-error="hasLoadingError = true"
  /> -->
  <GalleryAxios
    :photos-per-page="photosPerPage"
    :page-number="currentPageNumber"
    @update-total-count="updateTotalPhotosCount"
    @loading-state-change="setGalleryLoadingState"
    @loading-error="hasLoadingError = true"
  />
  <Paging
    v-if="!isGalleryLoading"
    :on-page-change="handlePageChange"
    :current-page="currentPageNumber"
    :total-pages="totalPageCount"
    :has-error="hasLoadingError"
  />
</template>
