<!-- src\components\GalleryFetch.vue -->
<script setup>
import { ref, watch, nextTick } from 'vue';
import { fetchPhotos } from '@/services/libs/fetch/photoService.js';
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

const displayedPhotos = ref([]);
const isLoading = ref(false);
const errorMessage = ref(null);
const isTotalCountFetched = ref(false);

const loadPhotosForPage = async () => {
  isLoading.value = true;
  emit('loadingStateChange', true);
  try {
    const { photos, totalCount } = await fetchPhotos(
      props.pageNumber,
      props.photosPerPage,
      !isTotalCountFetched.value
    );
    displayedPhotos.value = photos;

    if (!isTotalCountFetched.value) {
      emit('updateTotalCount', totalCount);
      isTotalCountFetched.value = true;
    }
  } catch (err) {
    console.error('Failed to fetch photos:', err);
    errorMessage.value = err.message;
    emit('loadingError', err);
  } finally {
    isLoading.value = false;
    emit('loadingStateChange', false);
  }
};

// One request
// v 1
watch(
  () => [props.pageNumber, props.photosPerPage],
  () => {
    nextTick(loadPhotosForPage);
  },
  { immediate: true }
);
// v 2
/**
onMounted(() => {
  loadPhotos();
});

watch(
  () => [props.page, props.limit],
  loadPhotos
);
/**/

// Double request
// watchEffect(() => {
//   loadPhotos();
// }, { flush: 'post' });

// Double request
// watchEffect(loadPhotos);
</script>

<template>
  <LoadingSpinner v-if="isLoading" />
  <div v-else-if="errorMessage" class="alert alert-warning text-center">
    {{ errorMessage }}
  </div>
  <div v-else class="mb-5">
    <h1>Photo Gallery</h1>
    <div class="row row-cols-2 row-cols-md-6 g-4">
      <div class="col" v-for="photo in displayedPhotos" :key="photo.id">
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
