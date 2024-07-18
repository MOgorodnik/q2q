<script setup lang="ts">
import { onMounted } from 'vue';
import { useProductStore } from "@/store";

import ProductsItems from './components/ProductsItems.vue';
import Loader from './components/Loader.vue';

const productsStore = useProductStore()

onMounted(() => {
  productsStore.getAllProducts()
})
</script>

<template>

  <div class="container">
    <Loader v-if="productsStore.loading" />

    <products-items v-else />
  </div>
</template>