<script setup lang="ts">
import { ref } from "vue";
import WatchPropsEmitChild from "./ItvdnLesson_04_WatchPropsEmitChild.vue";
import WatchPropsEmitChildModal from "./ItvdnLesson_04_WatchPropsEmitChildModal.vue";

const counter = ref(0);

const isModalOpen = ref(false)
const modalTitle = ref('')
const modalMsg = ref('')

const showModal = () => {
  isModalOpen.value = true;
  modalTitle.value = 'Lorem title';
  modalMsg.value = 'Lorem message';
  console.log('showModal');
  
}

const hideModal = () => {
  isModalOpen.value = false;
  modalTitle.value = '';
  modalMsg.value = '';
  console.log('closeModal');
}
</script>

<template>
  <div>
    <h1 class="text-center">Lesson 4</h1>
    <h2 class="bg-info">Watch, watchEffect, props, emit</h2>

    <h3>Parrent</h3>
    <hr>
    <input v-model.number="counter" type="number" step="1" />
    <hr>
    <watch-props-emit-child :counter="counter" />
    <hr>
    <button @click="showModal">Show modal window</button>
    <watch-props-emit-child-modal
      v-if="isModalOpen"
      :modal-title="modalTitle"
      :modal-msg="modalMsg"
      @close="hideModal" 
     />
  </div>
</template>