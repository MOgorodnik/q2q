<template>
  <div class="loader-container">
    <div class="spinner-border  text-success" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<style scoped>
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 9999;
}
.spinner-border {
  width: 3rem;
  height: 3rem;
}
</style>
