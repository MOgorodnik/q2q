<template>
  <h1>Products</h1>
  <div v-if="loading">
    <mark>Loading product information ...</mark>
  </div>
  <div v-else-if="errorMsg" class="text-white bg-danger bg-gradient p-2">
    <p class="mb-0">{{ errorMsg }}</p>
  </div>
  <div v-else-if="!isProducts" class="row row-cols-1 row-cols-md-4 g-4">
    <div v-for="product in products" :key="product.id" class="col">
      <RouterLink class="card h-100" :to="`/products/${product.id}`">
        <div class="pt-3 px-3">
          <img :src="product.image" :alt="product.title" style="height: 180px; mix-blend-mode:multiply;"
            class="card-img-top object-fit-contain">
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text"><strong>Price:</strong> ${{ product.price.toFixed(2) }}</p>
          <p class="card-text"><strong>Category:</strong> {{ product.category }}</p>
          <p class="card-text"><strong>Description:</strong> {{ product.description }}</p>
          <p class="card-text"><strong>Rating:</strong> {{ product.rating.rate }} ({{ product.rating.count }} reviews)
          </p>
        </div>
      </RouterLink>
    </div>
  </div>
  <div v-else>
    <p>No products in database.</p>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, computed, onMounted } from "vue";

interface Rating {
  rate: number;
  count: number;
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

const loading = ref(false)
const products = ref<Product[] | null>(null);
const errorMsg = ref<string | null>(null);

function isArrayEmpty(arr: any[] | null): boolean {
  return !arr || arr.length === 0;
}

const isProducts = computed(() => {
  return isArrayEmpty(products.value);
});

onMounted(async () => {
  try {
    loading.value = true;
    const res = await axios.get<Product[]>('https://fakestoreapi.com/products')
    products.value = res.data;
    console.log(products);

  } catch (error: unknown) {
    errorMsg.value = 'Error! Could not reach the API. ' + (error instanceof Error ? error.message : String(error));
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
}

.product-image {
  max-width: 200px;
  height: auto;
  display: block;
  margin: 0 auto;
}
</style>