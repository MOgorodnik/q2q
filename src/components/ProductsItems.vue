<script setup lang="ts">
console.log('Products list');
import { useProductStore } from "@/store";

const productsStore = useProductStore();

const removeProduct = (productId: number) => {
  productsStore.removeProduct(productId);
};
</script>

<template>
  <div>
    <h2>Products list</h2>
    <button @click="productsStore.sortProducts">Sort by Price</button>
    <ul>
      <li v-for="product in productsStore.products" :key="product.id">
        <h3>{{ product.title }}</h3>
        <ins>{{ product.price }}</ins>
        <p>{{ product.id }}</p>
        <button type="button" @click="removeProduct(product.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>