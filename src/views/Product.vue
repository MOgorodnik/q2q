<template>
  <div v-if="loading">
    <p><mark>Process of loading product data...</mark></p>
  </div>
  <div v-else-if="errorMsg" class="error">
    {{ errorMsg }}
  </div>
  <div v-else-if="product" class="product">
    <h1>{{ product.title }}</h1>
    <img :src="product.image" :alt="product.title" :title="product.title" class="product-image">
    <p class="description">{{ product.description }}</p>
    <p class="price">
      Price: <del>$1230.00</del> <ins>${{ product.price.toFixed(2) }}</ins>
    </p>
    <p class="rating">
      Rate: {{ product.rating.rate.toFixed(1) }}/5 ({{ product.rating.count }} reviews)
    </p>
  </div>
  <div v-else>
    <p>Product not found.</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps  } from "vue";
import { useRoute } from 'vue-router';
import axios from "axios";

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

const props = defineProps<{
  id: string
}>();

const route = useRoute();
const productId = route.params.id as string;

const loading = ref(false);
const product = ref<Product | null>(null);
const errorMsg = ref<string | null>(null);

onMounted(async () => {
  loading.value = true;
  try {
    // const res = await axios.get<Product>(`https://fakestoreapi.com/products/${productId}`);
    const res = await axios.get<Product>(`https://fakestoreapi.com/products/${props.id}`);
    product.value = res.data;
  } catch (error: unknown) {
    errorMsg.value = 'Error! Could not reach the API. ' + (error instanceof Error ? error.message : String(error));
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.product {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
}

.product-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 20px;
}

.description {
  margin-bottom: 15px;
}

.price {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.price ins {
  color: #4CAF50;
  text-decoration: none;
  font-weight: bold;
}

.rating {
  font-style: italic;
}

.error {
  color: red;
  font-weight: bold;
}

/* Мобільні пристрої */
@media (max-width: 767px) {
  .product-image {
    max-height: 300px;
  }
}

/* Планшети */
@media (min-width: 768px) and (max-width: 1023px) {
  .product {
    max-width: 80%;
  }

  .product-image {
    max-height: 400px;
  }
}

/* Десктопи */
@media (min-width: 1024px) {
  .product {
    max-width: 600px;
  }

  .product-image {
    max-height: 500px;
  }
}
</style>