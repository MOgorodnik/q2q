<script setup lang="ts">
import { ref } from "vue";
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

const handleImageError = (e: Event) => {
  const target = e.target as HTMLImageElement;
  target.src = 'https://picsum.photos/id/239/200/300';
};

const imageLoading = ref(true);

const handleImageLoad = () => {
  imageLoading.value = false;
};
</script>

<template>
  <div class="col">
    <div class="card h-100">
      <div class="ratio ratio-4x3">
        <div v-if="imageLoading" class="d-flex justify-content-center align-items-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <!-- <img :src="product.images[0]" class="card-img-top object-fit-contain" :alt="product.title" @error="handleImageError"> -->
        <img 
          :src="product.images[0]" 
          class="card-img-top object-fit-contain" 
          :alt="product.title" 
          @error="handleImageError"
          @load="handleImageLoad"
          :class="{ 'd-none': imageLoading }"
        >
      </div>
      <!-- <img :src="product.thumbnail" class="card-img-top" :alt="product.title" @error="handleImageError"> -->
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