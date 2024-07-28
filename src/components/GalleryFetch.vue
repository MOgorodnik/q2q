<script setup>
import { ref, watchEffect, onMounted, watch, nextTick } from "vue";
import { fetchTargetedPhotos } from "@/services/libs/fetch/fetchData.js";
import Loader from "@/components/Loader.vue";

const props = defineProps({
  limit: { type: Number, required: true },
  page: { type: Number, required: true }
});

const emit = defineEmits(['updateTotal']);

const targetedPhotos = ref([]);
const loading = ref(false);
const error = ref(null);
const totalFetched = ref(false);

const loadPhotos = async () => {
  loading.value = true;
  try {
    const { data, total } = await fetchTargetedPhotos(props.page, props.limit, !totalFetched.value);
    targetedPhotos.value = data;

    if (!totalFetched.value) {
      emit('updateTotal', total);
      totalFetched.value = true;
    }
  } catch (err) {
    console.error('Failed to fetch targeted photos:', err);
    error.value = 'Failed to load photos. Please try again later.';
  } finally {
    loading.value = false;
  }
};

// One request
/*
onMounted(() => {
  loadPhotos();
});

watch(
  () => [props.page, props.limit],
  loadPhotos
);
*/

watch(
  () => [props.page, props.limit],
  () => {
    nextTick(() => {
      loadPhotos();
    });
  },
  { immediate: true }
);

// Double request
// watchEffect(() => {
//   loadPhotos();
// }, { flush: 'post' });
  
// Double request
// watchEffect(loadPhotos);
</script>

<template>
  <Loader v-if="loading" />
  <div v-else-if="error">{{ error }}</div>
  <div v-else class="mb-5">
    <h1>The gallery uses the service with native fetch JS</h1>

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
  </div>
</template>

<style scoped></style>