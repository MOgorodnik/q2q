<!-- src\components\Paging.vue -->
<script setup>
import { computed, watch } from 'vue';

const props = defineProps({
  onPageChange: { type: Function, required: true },
  currentPage: { type: Number, required: true },
  totalPages: { type: Number, required: true },
  hasError: { type: Boolean, required: false, default: false },
});

const visiblePageNumbers = computed(() => {
  const pageNumbers = [];
  let startPage = Math.max(props.currentPage - 2, 1);
  let endPage = Math.min(startPage + 4, props.totalPages);
  if (endPage - startPage < 4) {
    startPage = Math.max(endPage - 4, 1);
  }
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
  return pageNumbers;
});

const shouldShowFirstEllipsis = computed(() => visiblePageNumbers.value[0] > 1);
const shouldShowLastEllipsis = computed(
  () =>
    visiblePageNumbers.value[visiblePageNumbers.value.length - 1] <
    props.totalPages
);

const navigateToPage = (pageNumber) => {
  if (pageNumber >= 1 && pageNumber <= props.totalPages) {
    props.onPageChange(pageNumber);
  }
};

watch(
  () => props.currentPage,
  (newPage) => {
    if (!visiblePageNumbers.value.includes(newPage)) {
      navigateToPage(newPage);
    }
  }
);
</script>

<template>
  <nav aria-label="Page navigation" v-if="!hasError">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: props.currentPage === 1 }">
        <button
          class="page-link"
          @click="navigateToPage(props.currentPage - 1)"
          :disabled="props.currentPage === 1"
        >
          Previous
        </button>
      </li>

      <template v-if="shouldShowFirstEllipsis">
        <li class="page-item">
          <button class="page-link" @click="navigateToPage(1)">1</button>
        </li>
        <li class="page-item">
          <span class="page-link">...</span>
        </li>
      </template>

      <li
        class="page-item"
        :class="{ active: props.currentPage === pageNumber }"
        v-for="pageNumber in visiblePageNumbers"
        :key="pageNumber"
      >
        <button class="page-link" @click="navigateToPage(pageNumber)">
          {{ pageNumber }}
        </button>
      </li>

      <template v-if="shouldShowLastEllipsis">
        <li class="page-item"><span class="page-link">...</span></li>
        <li class="page-item">
          <button class="page-link" @click="navigateToPage(props.totalPages)">
            {{ props.totalPages }}
          </button>
        </li>
      </template>

      <li
        class="page-item"
        :class="{ disabled: props.currentPage === props.totalPages }"
      >
        <button
          class="page-link"
          @click="navigateToPage(props.currentPage + 1)"
          :disabled="props.currentPage === props.totalPages"
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
</template>
