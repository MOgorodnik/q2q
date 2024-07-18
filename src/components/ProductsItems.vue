<!-- components/ProductsItems.vue -->
<script setup lang="ts">
import { useProductStore } from "@/store";
import { computed } from "vue";
import ProductItem from './ProductItem.vue';

const productsStore = useProductStore();

const sortedProducts = computed(() => {
  return [...productsStore.products].sort((a, b) =>
    productsStore.sortAscending ? a.price - b.price : b.price - a.price
  );
});

const toggleSort = () => {
  productsStore.setSortOrder(!productsStore.sortAscending);
};

const removeProduct = (productId: number) => {
  productsStore.removeProduct(productId);
};
</script>

<template>
  <div>
    <h2>Products list</h2>
    <button @click="toggleSort" class="btn btn-primary mb-3">
      Sort by Price ({{ productsStore.sortAscending ? 'Ascending' : 'Descending' }})
    </button>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      <ProductItem v-for="product in sortedProducts" :key="product.id" :product="product" @remove="removeProduct" />
    </div>
  </div>
</template>