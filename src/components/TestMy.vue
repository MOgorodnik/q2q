<script setup lang="ts">
import { ref } from 'vue';

const textValue = ref('');

const handleSubmit = (e: Event) => {
  // e.preventDefault(); // Prevent the default form submission behavior

  const formData = new FormData(e.target as HTMLFormElement);
  const inputValue = formData.get('inputName') as string; // Replace 'inputName' with the actual name attribute of your input field

  console.log('Input Value:', inputValue);

  // Reset the form
  (e.target as HTMLFormElement).reset();
  textValue.value = '';
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="textValue" type="text" name="inputName" placeholder="Enter text" />
    <button type="submit">Submit</button>
  </form>
</template>