<script setup lang="ts">
import { ref } from 'vue';
import type { Product } from '@/store';

const emit = defineEmits<{
  (e: 'added-product', product: Product): void;
}>();

const randomId = [237, 238, 239, 240]

const newProduct = ref<Product>({
  id: 0, // This will be set by the server or store
  title: 'Init title',
  price: 111,
  description: 'Initial descr',
  rating: 3,
  stock: 44,
  category: 'laptop',
  brand: 'Apple',
  thumbnail: '',
  images: ['https://picsum.photos/id/230/200/300'],
});

const validateProduct = (product: Product): boolean => {
  if (!product.title || product.price <= 0) {
    alert('Please fill in title && price required fields');
    return false;
  }
  if (product.rating < 0 || product.rating > 5) {
    alert('Rating must be between 0 and 5');
    return false;
  }
  if (product.stock < 0) {
    alert('Stock cannot be negative');
    return false;
  }
  return true;
};

const onAddProductFormSubmit = () => {
  if (validateProduct(newProduct.value)) {
    emit('added-product', { ...newProduct.value });
    // Reset form
    newProduct.value = {
      id: 0,
      title: 'title after reset form',
      price: 222,
      description: 'Descr after reset form',
      rating: 3,
      stock: 120,
      category: 'battery',
      brand: 'OM',
      thumbnail: '',
      images: [`https://picsum.photos/id/${randomId[Math.floor(Math.random()*randomId.length)]}/200/300`]
    };
  }
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <form @submit.prevent="onAddProductFormSubmit" class="bg-info rounded-4 p-4 mb-4 col-12 col-md-8 col-lg-6">
        <h3 class="text-center">Add new product</h3>
        <div class="row mb-3">
          <label for="title" class="col-sm-2 col-form-label col-form-label-sm">Title</label>
          <div class="col-sm">
            <input v-model="newProduct.title" type="text" class="form-control form-control-sm" id="title"
              placeholder="title">
          </div>
        </div>
        <div class="row mb-3">
          <label for="price" class="col-sm-2 col-form-label col-form-label-sm">price</label>
          <div class="col-sm">
            <input v-model="newProduct.price" type="number" min="5" max="2000" class="form-control form-control-sm" id="price"
              placeholder="price">
          </div>
        </div>
        <div class="row mb-3">
          <label for="description" class="col-sm-2 col-form-label col-form-label-sm">Description</label>
          <div class="col-sm">
            <input v-model="newProduct.description" type="text" class="form-control form-control-sm" id="description"
              placeholder="Description">
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-6">
            <div class="row">
              <label for="rating" class="col-sm-4 col-form-label col-form-label-sm">rating</label>
              <div class="col-sm">
                <input v-model="newProduct.rating" type="number" min="1" max="5" step="1" class="form-control form-control-sm" id="rating"
                  placeholder="rating">
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="row">
              <label for="stock" class="col-sm-4 col-form-label col-form-label-sm">stock</label>
              <div class="col-sm">
                <input v-model="newProduct.stock" type="number" min="100" max="500" step="10" class="form-control form-control-sm" id="stock"
                  placeholder="stock">
              </div>
            </div>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-6">
            <div class="row">
              <label for="category" class="col-sm-4 col-form-label col-form-label-sm">category</label>
              <div class="col-sm">
                <input v-model="newProduct.category" type="text" class="form-control form-control-sm" id="category"
                  placeholder="category">
              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="row">
              <label for="brand" class="col-sm-4 col-form-label col-form-label-sm">brand</label>
              <div class="col-sm">
                <input v-model="newProduct.brand" type="text" class="form-control form-control-sm" id="brand"
                  placeholder="brand">
              </div>
            </div>
          </div>
        </div>

        <div class="row mb-3">
          <label for="thumbnail" class="col-sm-2 col-form-label col-form-label-sm">thumbnail</label>
          <div class="col-sm">
            <input v-model="newProduct.images" type="text" value="https://picsum.photos/200/300?random=1"
              class="form-control form-control-sm" id="thumbnail" placeholder="thumbnail">
          </div>
        </div>

        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-primary" type="submit">Add Product</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
