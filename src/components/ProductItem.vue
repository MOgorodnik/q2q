<script setup lang="ts">
import type { Product } from '@/store';

interface Props {
  product: Product;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'remove', id: number): void;
}>();

const removeProduct = () => {
  emit('remove', props.product.id);
};
</script>

<template>
  <div class="col">
    <div class="card h-100">
      <img :src="product.thumbnail" class="card-img-top" :alt="product.title">
      <div class="card-body">
        <h5 class="card-title">{{ product.id }} - {{ product.title }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <p class="card-text"><small class="text-body-secondary">Category: {{ product.category }}</small></p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Price: ${{ product.price }}</li>
        <li class="list-group-item">Rating: {{ product.rating }}</li>
        <li class="list-group-item">Stock: {{ product.stock }}</li>
      </ul>
      <div class="card-footer">
        <small class="text-body-secondary">Brand: {{ product.brand }}</small>
      </div>
      <div class="card-footer d-grid gap-2 d-md-flex justify-content-md-end">
        <button @click="removeProduct" class="btn btn-danger btn-sm">Remove</button>
      </div>
    </div>
  </div>
</template>