<!-- components/ProductsItems.vue -->
<script setup lang="ts">
import { useProductStore } from "@/store";
import { computed, ref } from "vue";
import ProductItem from './ProductItem.vue';
import AddProductForm from "./AddProductForm.vue";

import type { Product } from '@/store';

const productsStore = useProductStore();
const error = ref<string | null>(null);

const sortedProducts = computed(() => productsStore.sortedProducts);

const toggleSort = () => {
  productsStore.setSortOrder(!productsStore.sortAscending);
};

// const removeProduct = (productId: number) => {
//   productsStore.removeProduct(productId);
// };

// const handleAddedProduct = (newProduct: Product) => {
//   productsStore.addProduct(newProduct);
// };
const removeProduct = async (productId: number) => {
  try {
    await productsStore.removeProduct(productId);
    error.value = null;
  } catch (err) {
    error.value = 'Failed to remove product. Please try again.';
  }
};

const handleAddedProduct = async (newProduct: Product) => {
  try {
    await productsStore.addProduct(newProduct);
    error.value = null;
  } catch (err) {
    error.value = 'Failed to add product. Please try again.';
  }
};
</script>

<template>
  <div>
    <h2>Products list </h2>

    <div v-if="error" class="alert alert-danger">{{ error }}</div>

    <div v-if="sortedProducts.length === 0" class="alert alert-info">
      No products available.
    </div>
    
    <div v-else>
      <AddProductForm @added-product="handleAddedProduct" />

      <button @click="toggleSort" class="btn btn-primary mb-3">
        Sort by Price ({{ productsStore.sortAscending ? 'Ascending' : 'Descending' }})
      </button>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <ProductItem v-for="product in sortedProducts" :key="product.id" :product="product" @remove="removeProduct" />
      </div>
    </div>
  </div>
</template>