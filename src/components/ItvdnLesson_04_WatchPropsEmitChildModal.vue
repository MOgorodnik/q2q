<script setup lang="ts">
interface ModalInterface {
  modalTitle: string
  modalMsg: string
}
defineProps<ModalInterface>()

const emits = defineEmits(['close'])
const closeModal = () => emits('close')
</script>

<template>
  <div class="mt-4">
    <div class="mmodal">
      <div class="modal-content">
        <h3>child component Modal - {{ modalTitle }}</h3>
        <p>{{ modalMsg }}</p>
        <button @click="closeModal">Close modal</button>
      </div>
    </div>
  </div>
</template>