<script setup>
import { ref, watchEffect } from "vue";
import { getTargetedPhotos } from "@/services/libs/axios/fetchData.js";
// import { fetchTargetedPhotos } from "@/services/libs/fetch/fetchData.js";
import Loader from "@/components/Loader.vue";

const props = defineProps({
  limit: { type: Number, required: true },
  page: { type: Number, required: true }
});

const emit = defineEmits(['updateTotal']);

const targetedPhotos = ref([]);
const loading = ref(false);
const error = ref(null);

const loadPhotos = async () => {
  loading.value = true;
  try {
    const { data, total } = await getTargetedPhotos(props.page, props.limit);
    targetedPhotos.value = data;
    emit('updateTotal', total);
  } catch (err) {
    console.error('Failed to fetch targeted photos:', err);
    error.value = 'Failed to load photos. Please try again later.';
  } finally {
    loading.value = false;
  }
};

watchEffect(loadPhotos);
</script>

<template>
  <Loader v-if="loading" />
  <div v-else-if="error">{{ error }}</div>
  <div v-else class="mb-5">
    <h1>The gallery uses the service with Axios </h1>

    <div class="row row-cols-2 row-cols-md-6 g-4">
      <div class="col" v-for="photo in targetedPhotos" :key="photo.id">
        <div class="card h-100">
          <img :src="`https://picsum.photos/100?random=${photo.id}`" :alt="photo.title" class="card-img-top">
          <div class="card-body overflow-y-auto" style="max-height: 100px;">
            <p class="card-text">{{ photo.title }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="photo" v-for="photo in targetedPhotos" :key="photo.id">
      <img :src="`https://picsum.photos/100?random=${photo.id}`" :alt="photo.title" width="100" height="100"
        style="display: inline-block;">
      <p>{{ photo.title }}</p>
      <hr>
    </div> -->
  </div>
</template>

<style scoped></style>