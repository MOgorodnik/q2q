<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useProductStore } from "@/store";

import ProductsItems from './components/ProductsItems.vue';
import Loader from './components/Loader.vue';

const productsStore = useProductStore();
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    await productsStore.getAllProducts();
  } catch (err) {
    console.error('Failed to fetch products:', err);
    error.value = 'Failed to load products. Please try again later.'
  }
});
</script>

<template>
  <div class="container">
    <Loader v-if="productsStore.loading" />
    <div v-else-if="error" class="alert alert-danger">{{ error }}</div>
    <products-items v-else />
  </div>
</template>