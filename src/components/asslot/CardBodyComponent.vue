<script setup lang="ts">

</script>

<template>
  <div class="card-body">
    <h5 class="card-title">
      <slot name="title">
        Default Card title from <br> &lt;slot name="title">
      </slot>
    </h5>

    <slot name="text">
      <p class="card-text">Default card text from slot --- <br /> is a longer card with supporting text below as a natural
        lead-in to additional content. This content is a little bit longer.</p>
    </slot>
  </div>
</template>
