<template>
  <h1>Product {{ product?.title || 5 }}</h1>
</template>

<script setup lang="ts">
interface Rating {
  rate: string;
  count: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
import axios from "axios";
import { ref, onMounted } from "vue";

const product = ref<Product>()

</script>