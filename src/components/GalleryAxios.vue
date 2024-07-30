<script setup>
import { ref, watch, nextTick  } from 'vue';
import { fetchPhotos } from '@/services/libs/axios/fetchData.js';
import LoadingSpinner from '@/components/LoadingSpinner.vue';

const props = defineProps({
  photosPerPage: { type: Number, required: true },
  pageNumber: { type: Number, required: true },
});

const emit = defineEmits([
  'updateTotalCount',
  'loadingStateChange',
  'loadingError',
]);

const targetedPhotos = ref([]);
const isLoading = ref(false);
const errorMessage = ref(null);
const isTotalCountFetched = ref(false);

const loadPhotos = async () => {
  isLoading.value = true;
  emit('loadingStateChange', true);
  try {
    const { photos, totalCount } = await fetchPhotos(
      props.pageNumber,
      props.photosPerPage,
      !isTotalCountFetched.value
    );
    
    targetedPhotos.value = photos;
    
    if (!isTotalCountFetched.value) {
      emit('updateTotalCount', totalCount);
      isTotalCountFetched.value = true;
    }
  } catch (err) {
    console.error('Failed to fetch photos:', err);
    errorMessage.value = err.message;;
    emit('loadingError', err);
  } finally {
    isLoading.value = false;
    emit('loadingStateChange', false);
  }
};

watch(
  () => [props.pageNumber, props.photosPerPage],
  () => {
    nextTick(loadPhotos);
  },
  { immediate: true }
);
</script>

<template>
  <LoadingSpinner v-if="isLoading" />
  <div v-else-if="errorMessage" class="alert alert-warning text-center">
    {{ errorMessage }}
  </div>
  <div v-else class="mb-5">
    <h1>The gallery uses the service with Axios</h1>

    <div class="row row-cols-2 row-cols-md-6 g-4">
      <div class="col" v-for="photo in targetedPhotos" :key="photo.id">
        <div class="card h-100">
          <img
            :src="`https://picsum.photos/100?random=${photo.id}`"
            :alt="photo.title"
            class="card-img-top"
          />
          <div class="card-body overflow-y-auto" style="max-height: 100px">
            <p class="card-text">{{ photo.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
