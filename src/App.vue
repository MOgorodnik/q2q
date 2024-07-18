<script setup lang="ts">
import { onMounted } from 'vue';
import { useProductStore } from "@/store";

import ProductsItems from './components/ProductsItems.vue';
import Loader from './components/Loader.vue';

const productsStore = useProductStore()

// const addProduct = (product: Product) => productsStore.addProduct(product);

// const removeProduct = (productId) => productsStore.removeProduct(productId);

// const sortProducts = () => productsStore.sortProducts()

onMounted(() => {
  productsStore.getAllProducts()
})
</script>

<template>

  <main>
    <Loader v-if="productsStore.loading" />

    <products-items v-else />
  </main>
</template>