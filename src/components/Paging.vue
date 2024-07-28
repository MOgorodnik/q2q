<script setup>
import { computed, watch } from "vue";

const props = defineProps({
  onChangePage: { type: Function, required: true },
  currentPage: { type: Number, required: true },
  pageCount: { type: Number, required: true }
});

const visiblePageNumbers = computed(() => {
  const res = [];
  let startPage = Math.max(props.currentPage - 5, 1);
  let endPage = Math.min(startPage + 5, props.pageCount);
  if (endPage - startPage < 5) {
    startPage = Math.max(endPage - 5, 1);
  }
  for (let i = startPage; i <= endPage; i++) {
    res.push(i);
  }
  return res;
});

const showFirstEllipsis = computed(() => visiblePageNumbers.value[0] > 1);
const showLastEllipsis = computed(() => visiblePageNumbers.value[visiblePageNumbers.value.length - 1] < props.pageCount);

const changePageHandler = (pageNumber) => {
  if (pageNumber >= 1 && pageNumber <= props.pageCount) {
    props.onChangePage(pageNumber);
  }
};

watch(() => props.currentPage, (newPage) => {
  if (!visiblePageNumbers.value.includes(newPage)) {
    changePageHandler(newPage);
  }
});
</script>

<template>
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: props.currentPage === 1 }">
        <button class="page-link" @click="changePageHandler(props.currentPage - 1)" :disabled="props.currentPage === 1">Prev</button>
      </li>

      <template v-if="showFirstEllipsis">
        <li class="page-item">
          <button class="page-link" @click="changePageHandler(1)">1</button>
        </li>
        <li class="page-item">
          <span class="page-link">...</span>
        </li>
      </template>

      <li class="page-item" :class="{ active: props.currentPage === pageNumber }" v-for="pageNumber in visiblePageNumbers" :key="pageNumber">
        <button class="page-link" @click="changePageHandler(pageNumber)">{{ pageNumber }}</button>
      </li>

      <template v-if="showLastEllipsis">
        <li class="page-item"><span class="page-link">...</span></li>
        <li class="page-item">
          <button class="page-link" @click="changePageHandler(props.pageCount)">{{ props.pageCount }}</button>
        </li>
      </template>

      <li class="page-item" :class="{ disabled: props.currentPage === props.pageCount }">
        <button class="page-link" @click="changePageHandler(props.currentPage + 1)" :disabled="props.currentPage === props.pageCount">Next</button>
      </li>
    </ul>
  </nav>
</template>